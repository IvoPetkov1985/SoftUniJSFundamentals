function storage(inputArray) {
    let warehouse = {};

    for (let line of inputArray) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (!warehouse.hasOwnProperty(product)) {
            warehouse[product] = 0;
        }

        warehouse[product] += quantity;
    }

    for (let kvp of Object.entries(warehouse)) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
);

function storage2(inputArray) {
    let warehouse = new Map();

    for (let line of inputArray) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (!warehouse.has(product)) {
            warehouse.set(product, quantity);
        } else {
            let currQuantity = warehouse.get(product);
            let newQuantity = currQuantity + quantity;
            warehouse.set(product, newQuantity);
        }
    }

    for (let kvp of warehouse) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage2(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
);

storage2(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);