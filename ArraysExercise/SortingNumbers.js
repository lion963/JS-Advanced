function sorting(arr){
    let newArr = []
    arr.sort((a,b) => a-b);
    while (arr.length){
        newArr.push(arr.shift())
        newArr.push(arr.pop())
    }
    return newArr
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))