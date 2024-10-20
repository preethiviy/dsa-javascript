/*
    Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

    An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

    Example 1:
    Input: strs = ["act","pots","tops","cat","stop","hat"]
    Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
    
    Example 2:
    Input: strs = ["x"]
    Output: [["x"]]
    
    Example 3:
    Input: strs = [""]
    Output: [[""]]
*/

function groupAnagrams(strs) {
    let sortedStrs = strs.map(str => str.split("").sort().join(""));

    let hash = {};

    for(let i = 0; i < strs.length; i++){
        if(hash[sortedStrs[i]]){
            hash[sortedStrs[i]].push(strs[i])
        }else{
            hash[sortedStrs[i]] = [strs[i]]
        }
    }

    return Object.values(hash);
}