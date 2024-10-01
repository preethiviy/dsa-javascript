/*
    Leetcode 3.

    Given a string 's', find the length of the longest substring without repeating characters.

    Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    
    Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    
    Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// Use sliding window

const lengthOfLongestSubstring = function(s){
    let max = 0;
    let windowStart = 0;
    const soFar = {};

    for(let windowEnd = 0; windowEnd < s.length; windowEnd++){
        console.log("the string is ", s);
        console.log("when windowEnd = ", windowEnd);
        let rightChar = s[windowEnd];
        soFar[rightChar] = soFar[rightChar] + 1 || 1;
        console.log("soFar = ", soFar);

        while(soFar[rightChar] > 1){
            let leftChar = s[windowStart];

            if(soFar[leftChar] > 1){
                soFar[leftChar]--;
            }else{
                delete soFar[leftChar];
            }
            console.log("soFar = ", soFar);

            windowStart++;
            console.log("windowStart = ", windowStart);
        }
        console.log("current max = ", max);
        console.log("window size = ", windowEnd - windowStart + 1);
        console.log("**************************************\n");
        max = Math.max(max, windowEnd - windowStart + 1);
    }

    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));