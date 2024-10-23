/*
    Given an integer array nums and an integer k, return the k most frequent elements within the array.

    The test cases are generated such that the answer is always unique.

    You may return the output in any order.

    Example 1:
    Input: nums = [1,2,2,3,3,3], k = 2
    Output: [2,3]
    
    Example 2:
    Input: nums = [7,7], k = 1
    Output: [7]
*/

function topKFrequent(nums, k) {
    let hash = {};

    for(const num of nums){
        hash[num] = (hash[num] || 0) + 1;
    }

    const arr = Object.entries(hash).map(([num, freq]) => [parseInt(num), freq]);

    arr.sort((a,b) => b[1] - a[1]);

    return arr.slice(0,k).map(pair => pair[0]);
}