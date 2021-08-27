function biggest(matrix) {
    let biggestNum = []
    for (let row of matrix){
        biggestNum.push(row.sort((a,b) => a-b).slice(-1))
    }
    return Math.max(biggestNum.sort((a,b) => a-b).slice(-1))
}

console.log(biggest([[20, 50, 10],
    [8, 33, 145]]))
console.log(biggest([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))