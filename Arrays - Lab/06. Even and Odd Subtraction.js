function evenAndOddSubtraction(inputArray) {
    let evenSum = 0;
    let oddSum = 0;
    let arrayLength = inputArray.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = Number(inputArray[i]);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    let finalResult = evenSum - oddSum;
    console.log(finalResult);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);