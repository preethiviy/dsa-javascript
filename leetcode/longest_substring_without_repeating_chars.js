/*
    Leetcode 3.

    Given a string 's', find the length of the longest substring without repeating characters.
*/

// Use sliding window

const lengthOfLongestSubstring = function(s){
    let max = 0;
    let windowStart = 0;
    const soFar = {};

    for(let windowEnd = 0; windowEnd < s.length; windowEnd++){
        let rightChar = s[windowEnd];
        soFar[rightChar] = soFar[rightChar] + 1 || 1;

        while(soFar[rightChar] > 1){
            let leftChar = s[windowStart];

            if(soFar[leftChar] > 1){
                soFar[leftChar]--;
            }else{
                delete soFar[leftChar];
            }

            windowStart++;
        }

        max = Math.max(max, windowEnd - windowStart + 1);
    }

    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));