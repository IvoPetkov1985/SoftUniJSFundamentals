function computerStore(input) {
    let index = 0;
    let command = input[index];

    let totalSum = 0;

    while (true) {
        if (command === "special" || command === "regular") {
            break;
        }

        let currentPrice = Number(command);

        if (currentPrice < 0) {
            console.log("Invalid price!");
        } else {
            totalSum += currentPrice;
        }

        index++;
        command = input[index];
    }

    if (totalSum === 0) {
        console.log("Invalid order!");
        return;
    }

    let taxes = totalSum * 0.20;
    let sumToPay = totalSum + taxes;

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");

    if (command === "special") {
        sumToPay *= 0.90;
    }

    console.log(`Total price: ${sumToPay.toFixed(2)}$`);
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