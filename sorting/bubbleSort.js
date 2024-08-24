//Time complexity ---> O(n^2)
function bubbleSort(arr){
    for(let i = arr.length; i > 0; i++){
        for(let j= 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("One pass complete");
    }

    return arr;
} 

function bubbleSort_optimized(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i++){
        noSwaps = true;
        for(let j= 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
        console.log("One pass complete");
    }

    return arr;
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));