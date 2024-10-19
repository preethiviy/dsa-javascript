/*
    Given a string s, return true if it is a palindrome, otherwise return false.

    A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

    Example 1:
    Input: s = "Was it a car or a cat I saw?"
    Output: true
    Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

    Example 2:
    Input: s = "tab a cat"
    Output: false
    Explanation: "tabacat" is not a palindrome.
*/

/*
    Be aware, that \W leaves the underscore. 
    A short equivalent for [^a-zA-Z0-9] would be [\W_]

        text.replace(/[\W_]+/g,"");
    \W is the negation of shorthand \w for [A-Za-z0-9_] word characters (including the underscore)
*/

function isPalindrome(s) {
    let newStr = s.replace(/[\W_]+/g,"");
    newStr = newStr.toLowerCase();
    console.log(newStr);
    let left = 0;
    let right = newStr.length - 1;
    
    while(left < right){
        if(newStr[left] !== newStr[right]) return false;
        left++;
        right--;
    }

    return true;
}