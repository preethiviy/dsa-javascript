/* 
    Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
    In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

    Examples:

    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)
    Your solution MUST have AT LEAST the following complexities:

    Time Complexity - O(N + M)

    Space Complexity - O(1)

*/

function isSubsequence(str1, str2){
    let i = 0;
    let j = 0;
    if(!str1) return true;
    while(j < str2.length){
        if(str2[j] === str1[i]) i++;
        if(i === str1.length) return true;
        j++;
    }
    return false;
}


//Recursive
//Not O(1) space
function isSubsequence_recursive(str1, str2){
    if(str1.length === 0) return true;
    if(str2.length === 0) return false;
    if(str2[0] === str1[0]) {
        return isSubsequence_recursive(
            str1.slice(1),
            str2.slice(1)
        )
    }

    return isSubsequence_recursive(str1, str2.slice(1));
}


//function call
console.log(isSubsequence('sing', 'sting'));