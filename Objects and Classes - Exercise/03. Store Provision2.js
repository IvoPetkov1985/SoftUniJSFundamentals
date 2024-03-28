function storeProvision(stockArray, orderArray) {
    let marketStock = {};

    for (let i = 0; i < stockArray.length; i += 2) {
        let product = stockArray[i];
        let quantity = Number(stockArray[i + 1]);
        marketStock[product] = quantity;
    }

    for (let i = 0; i < orderArray.length; i += 2) {
        let productToRestock = orderArray[i];
        let quantityToRestock = Number(orderArray[i + 1]);

        if (!marketStock.hasOwnProperty(productToRestock)) {
            marketStock[productToRestock] = 0;
        }

        marketStock[productToRestock] += quantityToRestock;
    }

    for (let product in marketStock) {
        console.log(`${product} -> ${marketStock[product]}`);
    }
}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

storeProvision(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);