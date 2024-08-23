/*
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
    Examples:

    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true
*/

function areThereDuplicates(...args){
    console.log(args);
    args.sort((a,b) => {
        if(a<b) return -1;
        if(a>b) return 1;
        return 0;
    })

    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true;
        }
        start++;
        next++;
    }
    return false;
}

//Bonus
function areThereDuplicatesOneLiner(...args){
    console.log(new Set(args));
    return new Set(args).size !== arguments.length;
}

//function call
console.log(areThereDuplicatesOneLiner('a', 'b', 'c', 'a'));