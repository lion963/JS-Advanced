function firstLast(arr){
    return Number(arr.pop()) + Number(arr.shift())
}

console.log(firstLast(['20', '30', '40']))
console.log(firstLast(['5', '10']))