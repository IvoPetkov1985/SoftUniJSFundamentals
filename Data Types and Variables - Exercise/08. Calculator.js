function calculator(firstNum, oper, secondNum) {
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;

    let result = 0;

    switch (oper) {
        case "+": result = add(firstNum, secondNum); break;
        case "-": result = subtract(firstNum, secondNum); break;
        case "*": result = multiply(firstNum, secondNum); break;
        case "/": result = divide(firstNum, secondNum); break;
    }

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);