function intOrFloat(num1, num2, num3) {
    let arr = [num1, num2, num3];

    let sum = arr.reduce((acc, x) => {
        return acc + x;
    }, 0);

    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

intOrFloat(9, 100, 1.1);
intOrFloat(100, 200, 303);