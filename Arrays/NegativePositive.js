function negPos(arr){
    let newArr = [];
    for (let num of arr){
        if (num < 0){
            newArr.unshift(num)
        } else {
            newArr.push(num)
        }
    }
    return newArr.join('\n')
}

console.log(negPos([7, -2, 8, 9]))
console.log(negPos([3, -2, 0, -1]))