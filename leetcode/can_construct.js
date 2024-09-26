/*
    Leetcode 383. Ransom Note

    Given two strings ransomNote and magazine, return true if ransomNote can be constructed 
    by using the letters from magazine and false otherwise.

    Each letter in magazine can only be used once in ransomNote.

    Example 1:
    Input: ransomNote = "a", magazine = "b"
    Output: false

    Example 2:
    Input: ransomNote = "aa", magazine = "ab"
    Output: false

    Example 3:
    Input: ransomNote = "aa", magazine = "aab"
    Output: true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length < ransomNote.length) return false;

    let hashMap1 = {};
    let hashMap2 = {};

    for(let i = 0; i < ransomNote.length; i++){
        hashMap1[ransomNote[i]] = hashMap1[ransomNote[i]] + 1 || 1;
    }

    for(let i = 0; i < magazine.length; i++){
        hashMap2[magazine[i]] = hashMap2[magazine[i]] + 1 || 1;
    }

    console.log("hashMap1", hashMap1);
    console.log("hashMap2", hashMap2);

    for(let key in hashMap1){
        if(!hashMap2[key]){
            return false;
        }else{
            if(hashMap1[key] > hashMap2[key]) return false
        }
    }

    return true;
};

console.log(canConstruct("aa", "ab"));