//Time complexity ---> O(n^2)
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let currentVal = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > currentVal){
            arr[j+1] = arr[j];
            console.log("inside while",arr);
            j--;
        }
        arr[j+1] = currentVal;
        console.log("after while",arr);
        console.log("***One Pass***");
    }

    return arr;
}

console.log(insertionSort([2,1,9,76,4]));