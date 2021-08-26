function lastK(n, k){
    let arr = [1];
    for (let i=0; i<n-1; i++){
        arr.push(arr.slice(-k).reduce((a,b) => a+b, 0))
    }
    return arr
}

console.log(lastK(6, 3))
console.log(lastK(8, 2))