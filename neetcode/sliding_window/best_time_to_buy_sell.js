/*
    You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

    You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

    Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

    Example 1:
    Input: prices = [10,1,5,6,7,1]
    Output: 6
    Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

    Example 2:
    Input: prices = [10,8,7,5,2]
    Output: 0
    Explanation: No profitable transactions can be made, thus the max profit is 0.
*/

function maxProfit(prices) {
    let min = prices[0];
    let max = min;
    let value = 0;

    console.log("prices = ", prices);

    for (let i = 0; i < prices.length; i++) {
        console.log("when i = ", i);
        console.log("before min = ",min);
        console.log("before max = ",max);
        if (i != prices.length - 1 && prices[i] <= min) {
            console.log("inside if ");
            max = min = prices[i];
            console.log("after max ", max);
            console.log("after min ", min);
        } else if (prices[i] > max) {
            console.log("inside else ");
            max = prices[i];
            console.log("after max ", max);
            console.log("after min ", min);
        }
        console.log("before value = ", value);
        value = max - min > value ? max - min : value;
        console.log("after value = ", value);
        console.log("****************************\n")
    }

    return value;
}

console.log(maxProfit([10,1,5,6,7,1]));