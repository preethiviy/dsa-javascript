/*
    Given two strings, write a function to determine if the second string is an anagram of the first.
    An anagram is a word, phrase, or name formed by rearranging the letters of another.
    Example: cinema formed from iceman.
*/

//Time complexity ---> n
function validAnagram(first, second){
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};
    for(let i=0; i<first.length; i++){
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i=0; i<second.length; i++){
        let letter = second[i];
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

//call function here
console.log(validAnagram("iceman","cineme"));