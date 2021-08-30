function NthEleent(arr, step){
    return arr.filter((el,i)=> i%step==0)
}

console.log(NthEleent(['5', 
'20', 
'31', 
'4', 
'20'], 
2))