/*
    Leetcode 14. Longest Common Prefix

    Write a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, return an empty string "".
    strs[i] consists of only lowercase English letters.

    Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    
    Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;
    console.log("Initial pref = ", pref);
    console.log("Initial pref Length = ", prefLen);
    console.log("***************************************\n");

    for (let i = 1; i < strs.length; i++) {
        let currString = strs[i];
        console.log("when currString = ", currString);
        while (pref !== currString.substring(0, prefLen)) {
            console.log("pref = ", pref);
            console.log("currString.substring(0, prefLen) = ", currString.substring(0, prefLen));
            prefLen--;
            console.log("prefLen = ", prefLen);
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
            console.log("pref = ", pref);
            console.log("**************************************\n");
        }
    }

    return pref;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));