/* 
    Write a function to count the number of times a smaller string appears in a longer string
*/

function naiveSearch(long, short){
    let count = 0;
    for(let i=0; i<long.length; i++){
        for(let j=0; j<short.length; j++){
            if(short[j] !== long[i+j]){
                break;
            }

            if(j === short.length - 1){
                count++;
            }
        }
    }

    return count;
}

console.log(naiveSearch("lorie loled", "lol"));