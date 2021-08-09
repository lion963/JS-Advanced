function cooking (number, ...args){
    function chop(num){
        return num/2
    }
    function dice(num){
        return Math.sqrt(num)
    }
    function spice(num){
        return num + 1
    }
    function bake(num){
        return num * 3
    }
    function fillet(num){
        return (num * 0.80).toFixed(2)
    }

    let mapper = {
        'chop': chop,
        'dice': dice,
        'spice': spice,
        'bake': bake,
        'fillet': fillet
    }

    let result = Number(number);
    for (let i=0; i<args.length; i++){
        result = mapper[args[i]](result)
        console.log(result)
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')