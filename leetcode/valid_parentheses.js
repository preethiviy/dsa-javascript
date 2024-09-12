/*
    Leetcode 20.
    
    Given a string s containing just the characters '(', ')', '{', '}', '[', ']', determine if the input string is valid.
    An input string is valid if:
        1. Open brackets must be closed by the same type of brackets.
        2. Open brackets must be closed in the correct order.
*/

// Use Stack

const isValid = function(s){
    const stack = [];
    const parens = "() {} []";
    let i = 0;

    while(i < s.length){
        stack.push(s[i]);
        i++;

        let open = stack[stack.length -2];
        let close = stack[stack.length -1];

        console.log("open ", open);
        console.log("close ", close);

        let potentialParens = open + close;

        console.log("potentialParens ", potentialParens);
        console.log("stack before ", stack);

        if(parens.includes(potentialParens)){
            stack.pop();
            stack.pop();
            console.log("stack after ", stack);
        }
    }

    return stack.length === 0;
}

// function calls

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([)]"));
console.log(isValid("{[]}"));