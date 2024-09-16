/*
    Leetcode 2.

    You are given two non-empty linked lists representing two non-negative integers.
    The digits are stored in reverse order, and each of their nodes constains a single digit.
    Add the two numbers and return the sum as linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            //current tail(which is node) next
            this.tail.next = newNode;
            //update the tail
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }
}

function addTwoNumbers(l1, l2){
    let carry = 0;
    let result = new Node(-1);
    let dummy = result;

    while(l1 || l2 || carry){
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;

        let nextDigit = (l1Val + l2Val + carry) % 10;
        result.next = new Node(nextDigit);
        result = result.next;

        carry = Math.floor((l1Val + l2Val + carry) / 10);

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
}

let list1 = new SinglyLinkedList();
let list2 = new SinglyLinkedList();

list1.push(7);
list1.push(5);
list1.push(2);

list2.push(1);
list2.push(5);
list2.push(3);

console.log("first list", list1);
console.log("second list", list2);

addTwoNumbers(list1, list2);