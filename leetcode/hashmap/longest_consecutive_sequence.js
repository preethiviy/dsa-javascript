/*
    128. Longest Consecutive Sequence

    Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

    You must write an algorithm that runs in O(n) time.

    Example 1:
    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. 
    Therefore its length is 4.

    Example 2:
    Input: nums = [0,3,7,2,5,8,4,6,0,1]
    Output: 9

    Example 2:
    Input: nums = [9,1,4,7,3,-1,0,5,8,-1,6]
    Output: 9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    // Step 1: Handle the base case when the array is empty.
    if (nums.length === 0) {
        return 0;
    }

    let numSet = new Set(nums);

    console.log("numSet", numSet);

    let longest = 1;    // Initialize a variable to store the maximum consecutive sequence length.

    // Step 3: Iterate through the elements of 'nums'.
    for (let num of numSet) {
        console.log("when num is = ", num);
        let cnt = 1;        // Initialize a counter for the current consecutive sequence length.
        // Step 4: If the current element 'num' is the start of a sequence (no 'num-1' in 'numSet'),
        if (!numSet.has(num - 1)) {
            let x = num;  // Update 'x' to the current element 'num'.

            // Step 5: While consecutive elements exist in 'numSet', increment 'cnt' and 'x'.
            while (numSet.has(x + 1)) {
                cnt++;
                x++;
                console.log("cnt", cnt);
            }
        }
        
        // Step 6: Update 'longest' with the maximum of 'longest' and 'cnt'.
        longest = Math.max(longest, cnt);
        console.log("longest", longest);
        console.log("***************************\n");
    }

    // Step 7: Return 'longest' as the result.
    return longest;
};

console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));