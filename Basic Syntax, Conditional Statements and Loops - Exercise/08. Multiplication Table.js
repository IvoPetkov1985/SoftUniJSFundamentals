function multiplicationTable(inputNumber) {
    const number = Number(inputNumber);
    const start = 1;
    const end = 10;

    for (let i = start; i <= end; i++) {
        let product = number * i;
        console.log(`${number} X ${i} = ${product}`);
    }
}

multiplicationTable(2);
multiplicationTable(5);