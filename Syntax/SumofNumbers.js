function sum_num(n, m){
    let result = 0;
    let num1 = Number(n);
    let num2 = Number(m);
    for (let i = num1; i<=num2; i++){
        result += i;
    }
    return result;
}

console.log(sum_num('1', '5'));
console.log(sum_num('-8', '20'));
