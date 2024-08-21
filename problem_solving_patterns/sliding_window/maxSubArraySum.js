/*
    Write a function called maxSubArraySum which accepts an array of integers and a number called n.
    The function should calculate the maximum sum of n consecutive elements in the array.
*/

//time complexity ---> O(n^2)
function maxSubArraySum_naive(arr, num){
    if(num > arr.length){
        return null;
    }

    let max = -Infinity;
    for(let i = 0; i< arr.length - num+1; i++){
        temp = 0;
        for(let j= 0; j< num; j++){
            temp += arr[i+j];
        }
        if(temp > max){
            max= temp;
        }
    }

    return max;
}


//time complexity ---> O(n)
function maxSubArraySum_refactored(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(num > arr.length){
        return null;
    }
    for(let i = 0; i< num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i< arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum(Math.max(maxSum, tempSum));
    }

    return maxSum;
}

//function call
console.log(maxSubArraySum_naive([2,6,9,2,1,8,5,6,3], 3));