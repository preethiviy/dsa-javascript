/*
    Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.
    If the value is not found, return -1.
*/

//time complexity ---> O(n)
function search_naive(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

//time complexity ---> O(logn). This is binary search.
function search_refactored(array, val){
    let min = 0;
    let max = array.length -1;

    while(min <= max){
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if(currentElement < val){
            min= middle + 1;
        }else if(currentElement > val){
            max = middle - 1;
        }else{
            return middle;
        }
    }

    return -1;
}