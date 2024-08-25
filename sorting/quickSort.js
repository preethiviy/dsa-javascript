//Time Complexity ---> O(nlogn)
//When the array is already sorted and the initial pivot is chosen as the first element,
//Time complexity changes to ---> O(n^2)

function pivot(arr, start=0, end=arr.length-1){
    function swap(array, i, j){
        let temp = array[i];
        array[i] = arr[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;

    for(let i= start+1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left=0, right=arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1, right);
    }

    return arr;
}