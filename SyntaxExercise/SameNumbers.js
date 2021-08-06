function same_nums (num){
    let num_to_str = String(num);
    let compare_num = num_to_str[0];
    let count_compare = 0;
    let total_sum = parseInt(num_to_str[0]);
    for (let i=1; i<num_to_str.length; i++){
        if (compare_num==num_to_str[i]){
            count_compare +=1;
        }
        total_sum += parseInt(num_to_str[i])
    }
    if (count_compare == num_to_str.length-1){
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(total_sum);
}

same_nums(222222)