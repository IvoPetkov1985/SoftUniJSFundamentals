function orders(product, quantity) {
    let singlePrice = 0;

    switch (product) {
        case "coffee": singlePrice = 1.50; break;
        case "water": singlePrice = 1.00; break;
        case "coke": singlePrice = 1.40; break;
        case "snacks": singlePrice = 2.00; break;
    }

    let finalPrice = multiplier(singlePrice, quantity);
    printPrice(finalPrice);

    function multiplier(price, quantity) {
        return price * quantity;
    }

    function printPrice(value) {
        console.log(value.toFixed(2));
    }
}

orders("water", 5);
orders("coffee", 2);