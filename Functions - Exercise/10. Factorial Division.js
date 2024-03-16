function factorialDivision(firstNum, secondNum) {
    const firstFactorial = factorialFinder(firstNum);
    const secondFactorial = factorialFinder(secondNum);

    console.log(divide(firstFactorial, secondFactorial));

    function factorialFinder(inputNumber) {
        let factorial = 1;

        for (let i = 2; i <= inputNumber; i++) {
            factorial *= i;
        }

        return factorial;
    }

    function divide(num1, num2) {
        let result = num1 / num2;
        return result.toFixed(2);
    }
}

factorialDivision(5, 2);
factorialDivision(6, 2);