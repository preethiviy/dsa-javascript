/*
    Leetcode 139.
    
    Given a non-empty string 's' and a dictionary 'wordDict' containing a list of non-empty words,
    determine if 's' can be segmented into space-separated sequence of one or more dictionary words.

    Note: 
        * The same word in the dictionary may be reused multiple times in the segmentation.
        * You may assume the dictionary does not contain duplicate words.
*/

// Dynamic programming

const wordBreak = function(s, wordDict){
    const table = new Array(s.length + 1).fill(false);
    table[0] = true;

    console.log("initial table ", table);
    console.log("\n*********************\n");

    for(let i = 0; i < table.length; i++){
        if(table[i] === false) continue;
        for(let j = i+1; j< table.length; j++){
            console.log("i and j ", i, j);
            console.log("s.slice(i,j) ", s.slice(i,j));
            if(wordDict.includes(s.slice(i,j))){
                table[j] = true;
            }
            console.log("table ", table);
        }
        console.log("\n*********************\n");
    }

    return table[table.length -1];
}

console.log(wordBreak("leetcode", ["leet", "code"]));