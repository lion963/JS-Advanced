function magic(matrix) {
    let rowSum = [];
    let colSum = [];
    for (let k = 0; k < matrix.length; k++) {
        colSum.push(0)
    }
    for (let i = 0; i < matrix.length; i++) {
        rowSum.push(matrix[i].reduce((a, b) => a + b, 0));
        for (let j = 0; j < matrix[i].length; j++) {
            colSum[j] += matrix[i][j]
        }
    }
    let result = rowSum.concat(colSum)
    return result.every((el, i, arr) => el === arr[0])
}

console.log(magic([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]))