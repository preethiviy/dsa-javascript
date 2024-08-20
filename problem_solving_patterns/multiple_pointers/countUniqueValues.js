/*
    Implement a function called countUniqueValue, which accepts a sorted array, and counts the unique values in the array.
    There can be negative numbers in the array, but it will always be sorted.
*/

//time complexity ---> O(n)
function countUniqueValues(arr){
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        console.log("before if: ",arr);
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
        console.log("after if: ",arr);
        console.log("~~~~~~~~~~~~~~~~~~~~~");
    }
    return i+1;
}

//function call
console.log(countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7]))