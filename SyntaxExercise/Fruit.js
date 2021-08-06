function buy_fruit(fruit, weight, price){
    let amount = (price*weight/1000).toFixed(2);
    console.log('I need $'+amount+' to buy '+(weight/1000).toFixed(2)+' kilograms '+fruit+'.');
}

buy_fruit('orange', 2500, 1.80)