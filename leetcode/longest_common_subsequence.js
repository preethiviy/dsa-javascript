/*
    Leetcode 1143.
    
    Given two strings 'text1' and 'text2', return the length of their longest common subsequence.
    A subsequence of a string is a new string generated from the original string with some characters(can be none)
    deleted without changing the relative order of the remaining characters.
    For example, 'ace' is a subsequence of 'abcde' while 'aec' is not.
    A common subsequence of two strings is a subsequence that is common to both strings.

    If there is no common subsequence, return 0.
*/

// dynamic programming

const longestCommonSubsequence = function(text1, text2){
    const table = Array.from({length: text1.length + 1}, () => new Array(text2.length + 1).fill(''));
    // console.log("table ", table);

    for(let i = 1; i < table.length; i++){
        for(let j = 1; j < table[i].length; j++){
            if(text1[i-1] === text2[j-1]){
                table[i][j] = table[i-1][j-1] + text1[i-1];
            }else{
                let aboveChar = table[i-1][j];
                let leftChar = table[i][j-1];

                table[i][j] = aboveChar.length > leftChar.length ? aboveChar : leftChar;
            }
        }
    }

    return table[table.length - 1][table[0].length - 1].length;
}

console.log(longestCommonSubsequence("abcde", "ace"));