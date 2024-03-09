function sumEvenNumbers(stringArray) {
    let sum = 0;
    let arrayLength = stringArray.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentNum = Number(stringArray[i]);

        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);

function evenNumbersSum(inputArray) {
    let sum = 0;

    for (let numAsString of inputArray) {
        let currentNumber = Number(numAsString);

        if (currentNumber % 2 === 0) {
            sum += currentNumber;
        }
    }

    console.log(sum);
}

evenNumbersSum(['1', '2', '3', '4', '5', '6']);
evenNumbersSum(['3', '5', '7', '9']);
evenNumbersSum(['2', '4', '6', '8', '10']);