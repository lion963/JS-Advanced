function listNames(arr) {
    let newArr = arr.sort((a, b) => a.localeCompare(b)).map((a, i) => `${i+1}.${a}`)
    return newArr.join('\n')
}

console.log(listNames(["John", "Bob", "Christina", "Ema"]))