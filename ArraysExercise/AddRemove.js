function addRemove(arr){
    let newArr = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i]=='add'){
            newArr.push(i+1);
        } else {
            newArr.pop();
        }
    }
    return newArr.length!=0 ? newArr.join('\n') : 'Empty'
}

console.log(addRemove(['add', 
'add', 
'add', 
'add']));