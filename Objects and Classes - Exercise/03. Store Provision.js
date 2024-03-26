function storeProvision(stockArray, provisionArray) {
    let store = {};

    for (let i = 0; i < stockArray.length; i += 2) {
        let productName = stockArray[i];
        let quantity = Number(stockArray[i + 1]);
        store[productName] = quantity;
    }

    for (let i = 0; i < provisionArray.length; i += 2) {
        let productName = provisionArray[i];
        let quantityToAdd = Number(provisionArray[i + 1]);

        if (productName in store) {
            store[productName] += quantityToAdd;
        } else {
            store[productName] = quantityToAdd;
        }
    }

    for (let kvp of Object.entries(store)) {
        let [product, quantity] = kvp;
        console.log(`${product} -> ${quantity}`);
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