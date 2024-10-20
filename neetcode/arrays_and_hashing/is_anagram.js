/*
    
    Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

    An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

    Example 1:
    Input: s = "racecar", t = "carrace"
    Output: true

    Example 2:
    Input: s = "jar", t = "jam"
    Output: false
*/

function isAnagram(s, t) {
    if(s.length !== t.length) return false;
    let hash = {};

    for(const item of s){
        hash[item] = (hash[item] || 0) + 1;
    }

    for(const item of t){
        if(hash[item]){
            hash[item] > 1 ? hash[item]-- : delete hash[item];
        }else{
            return false
        }
    }

    return true;
}