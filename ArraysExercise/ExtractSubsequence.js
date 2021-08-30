function extractSubseq(arr) {
    const solve = (newArr, cur) => {
        if (cur >= newArr[newArr.length-1] || newArr.length==0) {
            newArr.push(cur)
        }
        return newArr
    }
    return arr.reduce(solve, [])
}

console.log(extractSubseq([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))