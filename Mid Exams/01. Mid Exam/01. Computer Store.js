function computerStore(input) {
    let totalPrice = 0;
    let clientType = input.pop();

    for (let price of input) {
        let currentPrice = Number(price);

        if (currentPrice < 0) {
            console.log("Invalid price!");
        } else {
            totalPrice += currentPrice;
        }
    }

    if (totalPrice === 0) {
        console.log("Invalid order!");
        return;
    }

    let taxes = totalPrice * 0.20;
    let finalPrice = totalPrice + taxes;

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");

    if (clientType === "special") {
        finalPrice *= 0.90;
    }

    console.log(`Total price: ${finalPrice.toFixed(2)}$`);
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);

computerStore([
    'regular'
]);    