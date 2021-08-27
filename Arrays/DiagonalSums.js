function diagonalSums(matrix) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    for (let i=0; i<matrix.length; i++){
        diagonal1 += matrix[i][i]
        diagonal2 += matrix[i][matrix[i].length-i-1]
    }
    return [diagonal1, diagonal2].join(' ')
}


console.log(diagonalSums([[20, 40],
    [10, 60]]))
console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]))