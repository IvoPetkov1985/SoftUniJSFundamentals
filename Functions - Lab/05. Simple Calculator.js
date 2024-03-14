function simpleCalculator(firstNum, secondNum, oper) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let output = 0;

    switch (oper) {
        case "multiply": output = multiply(firstNum, secondNum); break;
        case "divide": output = divide(firstNum, secondNum); break;
        case "add": output = add(firstNum, secondNum); break;
        case "subtract": output = subtract(firstNum, secondNum); break;
    }

    print(output)

    function print(output) {
        console.log(output);
    }
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');