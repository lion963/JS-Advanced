function strlength (...args) {
    let array_params = [];
    for (let i=0; i<args.length; i++){
        array_params.push(args[i])
    }
    // let array_length = [a.length, b.length, c.length];
    let total_length = 0;
    for (let i=0; i<array_params.length; i++){
        total_length += array_params[i].length
    }
    let average = Math.floor(total_length/args.length)
    console.log(total_length);
    console.log(average);

}

strlength('chocolate', 'ice cream', 'cake')