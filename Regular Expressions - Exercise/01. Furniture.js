function furniture(inputArray) {
    let index = 0;
    let commandLine = inputArray[index];

    let pattern = />>(?<product>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<qty>\d+)/;
    let boughtItems = [];
    let spentMoney = 0;

    while (commandLine !== "Purchase") {
        let match = commandLine.match(pattern);

        if (match) {
            let { product, price, qty } = match.groups;
            let currentBill = price * qty;
            boughtItems.push(product);
            spentMoney += currentBill;
        }

        index++;
        commandLine = inputArray[index];
    }

    console.log("Bought furniture:");

    if (boughtItems.length > 0) {
        boughtItems.forEach(item => console.log(item));
    }

    console.log(`Total money spend: ${spentMoney.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
);

furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
);