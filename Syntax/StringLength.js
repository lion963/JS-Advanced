function strlength (...args) {
    let total_length = args.reduce((a, b) => a + b.length, 0);
    let average = Math.floor(total_length/args.length)
    console.log(total_length);
    console.log(average);

}

strlength('chocolate', 'ice cream', 'cake')