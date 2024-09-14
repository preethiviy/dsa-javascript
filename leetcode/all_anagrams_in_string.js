/*
    Leetcode 438.

    Given a string 's' and a non-empty string 'p', find all the start indices of p's
    anagrams in 's'.
    Strings consist of lowercase English letters only and the length of both strings 's' 
    and 'p' will not be larger than 20,100.
    The order of output does not matter.
*/

// Sliding window

function arrayValuesEqual(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;
    }

    return true;
}

function findAnagrams(s, p){
    const sArr = new Array(26).fill(0);
    const pArr = new Array(26).fill(0);
    const result = [];

    for(let i = 0; i < p.length; i++){
        let index = p.charCodeAt(i) % 26;
        pArr[index] += 1; 
    }

    for(let i = 0; i < s.length; i++){
        let index = s.charCodeAt(i) % 26;
        sArr[index] += 1;
        
        if(i > p.length - 1){
            let headIdx = s.charCodeAt(i - p.length) % 26;
            sArr[headIdx]--;
        }

        if(i >= p.length - 1){
            if(arrayValuesEqual(sArr, pArr)){
                result.push(i - (p.length - 1));
            }
        }
    }

    return result;
}

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("ababcbab", "ab"));