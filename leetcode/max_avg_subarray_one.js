/*
    Leetcode 643.
    
    Given an array consisting of 'n' integers, find the contiguous subarray of given length 'k'
    that has the maximum avaerage value. And you need to output the maximum avaerage value.
*/

// Use Sliding window

const findMaxAverage = function(nums, k){
    let max = -Infinity;
    let soFar = 0;
    let windowStart = 0;
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        soFar += nums[windowEnd];

        if(windowEnd - windowStart === k-1){
            let avg = soFar/k;
            max = Math.max(max, avg);
            soFar -= nums[windowStart];
            windowStart++;
        }
    }

    return max;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));