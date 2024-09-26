/*
    205. Isomorphic Strings

    Given two strings s and t, determine if they are isomorphic.

    Two strings s and t are isomorphic if the characters in s can be replaced to get t.

    All occurrences of a character must be replaced with another character while preserving the order of characters. 
    No two characters may map to the same character, but a character may map to itself.

    Example 1:
    Input: s = "egg", t = "add"
    Output: true

    Example 2:
    Input: s = "foo", t = "bar"
    Output: false
*/

var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    const sToMap = new Map();
    const tToMap = new Map();

    for(let i = 0; i < s.length; i++){
        console.log("when i is ", i);
        console.log("sToMap", sToMap);
        console.log("tToMap", tToMap);
        console.log("********************")
        if(
            sToMap.has(s[i]) && sToMap.get(s[i]) !== t[i] ||
            tToMap.has(t[i]) && tToMap.get(t[i]) !== s[i] 
        ) return false;

        sToMap.set(s[i], t[i]);
        tToMap.set(t[i], s[i]);
    }

    return true;
};

console.log(isIsomorphic("paper","title"));