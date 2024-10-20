/*
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

    The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

    Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation:
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].

    Example 2:
    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

    Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.
*/

function threeSum(nums) {
    nums.sort((a,b) => a - b);
    console.log("sorted nums: ", nums);
    let result = [];

    for(let i = 0; i < nums.length; i++){
        console.log("when i = ", i);
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        
        while(left < right){
            console.log("when left = ", left);
            console.log("when right = ", right);
            const sum = nums[i] + nums[left] + nums[right];
            console.log("sum = ", sum);

            if(sum > 0){
                right--;
            } else if(sum < 0){
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                console.log("result = ", result);
                while(left < right && nums[left] === nums[left - 1]){
                    left++
                }
            }

            console.log("************************\n");
        }
        console.log("************************\n");
    }

    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([-2,0,0,2,2]));