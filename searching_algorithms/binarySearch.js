/* 
    Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. 
    Otherwise, return -1.

    This algorithm should be more efficient than linearSearch.

    Examples:

    binarySearch([1,2,3,4,5],2) // 1
    binarySearch([1,2,3,4,5],3) // 2
    binarySearch([1,2,3,4,5],5) // 4
    binarySearch([1,2,3,4,5],6) // -1
    binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 10) // 2
    binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 95) // 16
    binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 100) // -1
*/


//Time Complexity ---> O(logn)
//caveat ---> only works on sorted array
function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end){
        if(elem < arr[middle]){
            end = middle - 1;
        }else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === elem ? middle : -1;
}

console.log(
    binarySearch([
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 95)
)