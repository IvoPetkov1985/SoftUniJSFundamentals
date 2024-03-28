function catalogue(inputArray) {
    let allProducts = [];

    for (let line of inputArray) {
        let [product, price] = line.split(" : ");
        let currentObject = {
            product,
            price: Number(price)
        };

        allProducts.push(currentObject);
    }

    let sortedCatalogue = allProducts.sort((a, b) => a.product.localeCompare(b.product));

    let startingLetter = "";

    for (let obj of sortedCatalogue) {
        let currentLetter = obj.product[0];

        if (currentLetter !== startingLetter) {
            startingLetter = currentLetter;
            console.log(currentLetter);
        }

        console.log(`  ${obj.product}: ${obj.price}`);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);