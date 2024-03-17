function listOfProducts(productsArray) {
    let ordered = productsArray.sort();

    let counter = 1;

    for (let product of ordered) {
        console.log(`${counter}.${product}`);
        counter++;
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);