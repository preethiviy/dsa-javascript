/*
    242. Valid Anagram

    Given two strings s and t, return true if t is an 
    anagram of s, and false otherwise.

    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let obj = {};
    for(let i = 0; i < s.length; i++){
        obj[s[i]] = obj[s[i]] + 1 || 1;
    }

    for(let i = 0; i < t.length; i++){
        if(obj[t[i]]){
            obj[t[i]]--;
        }else{
            return false;
        }
    }

    return true;
};