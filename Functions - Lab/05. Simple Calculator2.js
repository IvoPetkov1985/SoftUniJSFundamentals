function simpleCalculator(firstNum, secondNum, oper) {
    let result = 0;

    switch (oper) {
        case "add": result = add(firstNum, secondNum); break;
        case "subtract": result = subtract(firstNum, secondNum); break;
        case "multiply": result = multiply(firstNum, secondNum); break;
        case "divide": result = divide(firstNum, secondNum); break;
    }

    print(result);

    function print(value) {
        console.log(value);
    }

    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    function multiply(x, y) {
        return x * y;
    }

    function divide(x, y) {
        return x / y;
    }
}

simpleCalculator(5, 5, "add");
simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");