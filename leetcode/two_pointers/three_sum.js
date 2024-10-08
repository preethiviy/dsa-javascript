/*
    Leetcode 15. 3Sum

    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

    Notice that the solution set must not contain duplicate triplets.

    Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.
    
    Example 2:
    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.
    
    Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
*/

var threeSum = function(nums) {
    let out = [];
    if (nums.length < 3) return out;
    let sorted = nums.sort((a,b) => a- b);
    console.log("sorted", sorted);

    for (let i = 0; i < sorted.length; i++) {
        console.log("when i is ", i);
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;

        let left = i + 1;
        let right = sorted.length - 1;

        console.log("left = ", left);
        console.log("right = ", right);

        while (left < right) {
            let res = sorted[i] + sorted[left] + sorted[right];
            console.log("res", res);
            if (res === 0) {
                out.push([sorted[i], sorted[left], sorted[right]])
                console.log("out ", out);
                while (left < right && sorted[left] === sorted[left + 1]){
                    left++ 
                    console.log("left (inside inner while) ", left); 
                } 
                while (left < right && sorted[right] === sorted[right - 1]){
                    right--
                    console.log("right (inside inner while) ", right); 
                } 
                left++;
                right--;
            }
            else if (res > 0) {
                right--
            } else {
                left++
            }

            console.log("left, right (outer while) ", left, right);
        }
        console.log("***********************\n");
    }
    return out
};

console.log(threeSum([-1,0,1,2,-1,-4]));