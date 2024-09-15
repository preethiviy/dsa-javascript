/*
    Leetcode 2.

    You are given two non-empty linked lists representing two non-negative integers.
    The digits are stored in reverse order, and each of their nodes constains a single digit.
    Add the two numbers and return the sum as linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

function addTwoNumbers(l1, l2){
    let carry = 0;
    let result = new ListNode(-1);
    let dummy = result;

    while(l1 || l2 || carry){
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;

        let nextDigit = (l1Val + l2Val + carry) % 10;
        result.next = new ListNode(nextDigit);
        result = result.next;

        carry = Math.floor((l1Val + l2Val + carry) / 10);

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
}