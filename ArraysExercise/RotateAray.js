function rotate(arr, param){
    for (let i=0; i<param; i++){
        arr.unshift(arr.pop())
    }
    return arr.join(' ')
}

console.log(rotate(['1', 
'2', 
'3', 
'4'], 
2))