function evenPosition(arr) {
    // let evenArr = []
    // for (let i=0; i<arr.length; i++){
    //     if (i%2==0){
    //         evenArr.push(arr[i])
    //     }
    // }
    // return evenArr.join(' ')
    return arr.filter(x => arr.indexOf(x)%2==0).join(' ')
}

console.log(evenPosition(['20', '30', '40', '50', '60']))
console.log(evenPosition(['5', '10']))