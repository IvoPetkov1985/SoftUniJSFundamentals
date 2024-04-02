function softuniBarIncome(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^\|\$\%\.]*<(?<product>\w+)>[^\|\$\%\.]*\|(?<count>\d+)\|[^\|\$\%\.\d+]*(?<price>\d+(\.\d+)?)\$/;

    let totalIncome = 0;

    let index = 0;
    let line = input[index];

    while (line !== "end of shift") {
        let match = line.match(pattern);

        if (match !== null) {
            let { name, product, count, price } = match.groups;
            let totalPrice = count * price;
            totalIncome += totalPrice;

            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }

        index++;
        line = input[index];
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);

softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
);