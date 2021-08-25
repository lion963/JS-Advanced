// let a='ddsafdf';
// b = 'dsaas';

// console.log(a,b)


function printStars(count) {
    console.log('*'.repeat(count));
}

printStars(5);

myarray = [10, 20, 30, 40]
let [...newarray] = myarray

console.log(...myarray, newarray)

function test(a, b, c, d){
    console.log(a, b, c, d)
}

test(...myarray)