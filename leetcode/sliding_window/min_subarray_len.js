/*
    209. Minimum Size Subarray Sum

    Given an array of positive integers nums and a positive integer target, return the minimal length of a 
    subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

    Example 1:
    Input: target = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: The subarray [4,3] has the minimal length under the problem constraint.
    
    Example 2:
    Input: target = 4, nums = [1,4,4]
    Output: 1
    
    Example 3:
    Input: target = 11, nums = [1,1,1,1,1,1,1,1]
    Output: 0
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 
var minSubArrayLen = function(target, nums) {
    let windowStart = 0;
    let subarraySum = 0;
    let minValue = Infinity;

    for(let windowEnd=0; windowEnd < nums.length; windowEnd++){
        console.log("array = ", nums);
        console.log("when windowEnd is ", windowEnd);
        subarraySum += nums[windowEnd];
        console.log("subarraySum = ", subarraySum);

        while(subarraySum >= target){
            console.log("subarraySum is greater than or equal to target ");
            console.log("minValue = ", minValue);
            console.log("window size = ", windowEnd - windowStart + 1);
            minValue = Math.min(minValue, windowEnd - windowStart + 1);
            subarraySum -= nums[windowStart];
            console.log("subarraySum = ", subarraySum);
            windowStart++;
            console.log("windowStart = ", windowStart);
        }
        console.log("***********************************\n");
    }
    return minValue === Infinity ? 0 : minValue;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));