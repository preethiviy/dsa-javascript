/*
    Leetcode 1.
    
    Given an array of integers "nums" and an integer "target", return indices of the two numbers such that they add up to "target".

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
*/

// use hash map

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = new Map();
    for(let i = 0; i < nums.length; i++){
        obj.set(nums[i], i);
    }

    let potentialElement = 0;

    for(let i = 0; i < nums.length; i++){
        potentialElement = target - nums[i];

        if(obj.has(potentialElement) && obj.get(potentialElement) !== i){
            return [i, obj.get(potentialElement)];
        }
    }
};