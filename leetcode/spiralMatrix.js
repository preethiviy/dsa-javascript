/*
    Leetcode 54.

    Given an 'm x n' matrix, return all elements of the matrix in spiral order.
*/

function spiralMatrix(matrix){
    let result = [];
    let top = 0,
        right = matrix[0].length - 1,
        bottom = matrix.length - 1,
        left = 0;
    let size = matrix.length * matrix[0].length;
    
    while(top <= bottom && left <= right){
        // top
        for(let i = top; i <= right && result.length < size; i++){
            result.push(matrix[top][i]);
        }
        top++;

        // right
        for(let i = top; i <= bottom && result.length < size; i++){
            result.push(matrix[i][right]);
        }
        right--;

        // bottom
        for(let i = right; i >= left && result.length < size; i--){
            result.push(matrix[bottom][i]);
        }
        bottom--;

        // left
        for(let i = bottom; i >= top && result.length < size; i--){
            result.push(matrix[i][left]);
        }
        left++;
    }

    return result;
}

console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));