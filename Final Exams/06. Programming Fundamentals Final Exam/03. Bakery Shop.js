function bakeryShop(input) {
    let index = 0;
    let commandLine = input[index];

    let allProducts = {};
    let soldItems = 0;

    while (commandLine !== "Complete") {
        let [command, quantity, product] = commandLine.split(" ");
        quantity = Number(quantity);

        if (command === "Receive" && quantity > 0) {

            if (!allProducts.hasOwnProperty(product)) {
                allProducts[product] = quantity;
            } else {
                allProducts[product] += quantity;
            }

        } else if (command === "Sell") {

            if (!allProducts.hasOwnProperty(product)) {
                console.log(`You do not have any ${product}.`);
            } else {

                if (allProducts[product] < quantity) {
                    let soldQuantity = allProducts[product];
                    soldItems += soldQuantity;
                    delete allProducts[product];
                    console.log(`There aren't enough ${product}. You sold the last ${soldQuantity} of them.`);
                } else {
                    allProducts[product] -= quantity;
                    soldItems += quantity;

                    if (allProducts[product] === 0) {
                        delete allProducts[product];
                    }
                    console.log(`You sold ${quantity} ${product}.`);
                }
            }
        }

        index++;
        commandLine = input[index];
    }

    Object.entries(allProducts).forEach(entry => console.log(`${entry[0]}: ${entry[1]}`));
    console.log(`All sold: ${soldItems} goods`);
}

bakeryShop(["Receive 105 cookies",
    "Receive 10 donuts",
    "Sell 10 donuts",
    "Sell 1 bread",
    "Complete"]
);

bakeryShop(["Receive 10 muffins",
    "Receive 23 bagels",
    "Sell 5 muffins",
    "Sell 10 bagels",
    "Complete"]
);