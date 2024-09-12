/*
    Leetcode 5.

    Given a string 's', return the longest palindromic substring in 's'.
*/

const getDrome = (left, right, s) => {
    while(left >=0 && right < s.length){
        if(s[left] !== s[right]) break;

        left--;
        right++;
    }

    return [left+1, right];
}

const longestPalindrome = function(s){
    let max = [0, 1];

    for(let i = 0; i < s.length; i++){
        let even = getDrome(i-1, i, s);
        let odd = getDrome(i-1, i+1, s);

        console.log("when i is", i);
        console.log("even", even);
        console.log("odd", odd);

        let currMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        console.log("currMax", currMax);

        max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax;
        console.log("max", max);
        console.log("\n*********************\n")
    }

    return s.slice(max[0], max[1]);
}

console.log(longestPalindrome("babad"));