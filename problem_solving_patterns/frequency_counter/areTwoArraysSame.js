/*
    Write a function which accepts two arrays.
    The function should return true if every value in the array has its corresponding value squared in the second array.
    The frequency of values must be the same. 
*/

//Time complexity ---> n^2
function same_naive(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        let indexFound = arr2.indexOf(arr1[i]**2);
        if(indexFound === -1){
            return false;
        }
        arr2.splice(indexFound,1);
    }
    return true;
}


//Time complexity ---> n
function same_refactored(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; 
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; 
    }
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key**2]){
            return false;
        }
    }
    return true;
}

//call function here
console.log(same_refactored([1,2,3,4,5],[1,4,9,16,25]));