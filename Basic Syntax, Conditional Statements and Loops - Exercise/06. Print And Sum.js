function printAndSum(firstNum, secondNum) {
    let sum = 0;
    let numbers = [];

    for (let i = firstNum; i <= secondNum; i++) {
        numbers.push(i);
        sum += i;
    }

    let resultString = numbers.join(" ");
    console.log(resultString);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);

function printNumbersAndSum(num1, num2) {
    let sum = 0;
    let resultString = "";

    for (let i = num1; i <= num2; i++) {
        sum += i;
        resultString += i + " ";
    }

    console.log(resultString.trimEnd());
    console.log(`Sum: ${sum}`);
}

printNumbersAndSum(5, 10);
printNumbersAndSum(0, 26);
printNumbersAndSum(50, 60);