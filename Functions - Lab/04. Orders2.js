function orders(product, count) {
    const multiplier = (x, y) => x * y;
    const print = x => console.log(x.toFixed(2));
    let singlePrice = 0;

    if (product === "coffee") {
        singlePrice = 1.50;
    } else if (product === "water") {
        singlePrice = 1.00;
    } else if (product === "coke") {
        singlePrice = 1.40;
    } else if (product === "snacks") {
        singlePrice = 2.00;
    }

    let finalSum = multiplier(singlePrice, count);
    print(finalSum);
}

orders("water", 5);
orders("coffee", 2);
orders("coke", 3);