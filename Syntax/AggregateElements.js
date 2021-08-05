function aggregate(array){
    let sum = array.reduce((a,b) => a + b, 0)
    let sum_inverse = array.reduce((a,b) => a + 1/b, 0)
    let concat_array = array.reduce((a,b) => a + b, '')
    console.log(sum)
    console.log(sum_inverse)
    console.log(concat_array)
}

aggregate([1, 2, 3])
aggregate([2, 4, 8, 16])
