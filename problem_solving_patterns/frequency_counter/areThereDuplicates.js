/*
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
    Examples:

    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true
*/

function areThereDuplicates(...args){
    console.log(args);
    let collection = {};
    for(let val in args){
        collection[args[val]] = (collection[args[val]] || 0) + 1;
    }

    for(let key in collection){
        if(collection[key] > 1){
            return true;
        }
    }

    return false;
}

//function call
console.log(areThereDuplicates('a', 'b', 'c', 'a'));