/*
    You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

    The input string s is valid if and only if:

    Every open bracket is closed by the same type of close bracket.
    Open brackets are closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
    Return true if s is a valid string, and false otherwise.

    Example 1:
    Input: s = "[]"
    Output: true
    
    Example 2:
    Input: s = "([{}])"
    Output: true
    
    Example 3:
    Input: s = "[(])"
    Output: false
    Explanation: The brackets are not closed in the correct order.
*/


function isValid(s) {
    const stack = [];
    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };
    console.log("string = ", s);

    for (const char of s) {
        console.log("when char = ", char);
        const isBracket = char in map;
        console.log("isBracket ", isBracket);
        if (!isBracket) {
            stack.push(char);
            console.log("stack = ", stack);
            console.log("***********************\n");
            continue;
        }

        const isEqual = stack[stack.length - 1] === map[char];
        console.log("isEqual = ", isEqual);
        if (isEqual) {
            stack.pop();
            console.log("stack = ", stack);
            console.log("***********************\n");
            continue;
        }

        return false;
    }

    return stack.length === 0;
}

const isValidAnotherWay = function(s){
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

console.log(isValid("[(])"));
