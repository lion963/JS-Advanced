function max_number(...args){
    // let max_num = args[0];
    let max_num = Math.max(...args);
    // for (let i=0; i<args.length; i++){
    //     if (max_num < args[i]){
    //         max_num = args[i];
    //     }
    // }
    console.log('The largest number is '+max_num+'.');
}

max_number(5, -3, 16)