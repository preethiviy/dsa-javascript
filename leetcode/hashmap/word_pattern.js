/*
    Leetcode 290.

    Given a pattern and a string s, find if s follows the same pattern.

    Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

    * Each letter in pattern maps to exactly one unique word in s.
    * Each unique word in s maps to exactly one letter in pattern.
    * No two letters map to the same word, and no two words map to the same letter.
    
    Example: 

    Input: pattern = "abba", s = "dog cat cat dog"

    Output: true
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */


// var wordPattern = function(pattern, s) {
//     const splitWords = s.split(" ");

//     if(pattern.length !== splitWords.length) return false;
//     if(new Set(pattern.split("")).size !== new Set(splitWords).size) return false;

//     let hash = new Map();

//     for(let i = 0; i < pattern.length; i++){

//         if(!hash.has(pattern[i])){
//             hash.set(pattern[i], [splitWords[i]])
//         }else{
//             let current = hash.get(pattern[i]);
//             hash.set(pattern[i], [...current, splitWords[i]]);
//         }
//     }

//     console.log("hash.values()", [...hash.values()].flat());

//     if(hash.size > 1){
//         const set = new Set([...hash.values()].flat());
//         if(set.size === 1) return false;
//     }

//     for (const [key, value] of hash.entries()) {
//         const set = new Set(value);
//         if(set.size !== 1) return false;
//     }

//     return true;
// };

// Another solution 

function wordPattern(pattern, s) {
    const arrP = pattern.split('');
    const arrS = s.split(' ');

    if(arrP.length !== arrS.length) return false;

    const pToMap = new Map();
    const sToMap = new Map();

    for(let i = 0; i < pattern.length; i++){
        if(
            pToMap.has(arrP[i]) && pToMap.get(arrP[i]) !== arrS[i] ||
            sToMap.has(arrS[i]) && sToMap.get(arrS[i]) !== arrP[i] 
        ) return false;

        pToMap.set(arrP[i], arrS[i]);
        sToMap.set(arrS[i], arrP[i]);
    }

    return true;
};

console.log(wordPattern("abc", "dog cat dog"));