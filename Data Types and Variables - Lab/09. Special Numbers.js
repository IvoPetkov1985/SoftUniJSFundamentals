function specialNumbers(inputNumber) {
    for (let i = 1; i <= inputNumber; i++) {
        let currentNum = i;

        let numAsString = currentNum.toString();
        let currentSum = 0;

        for (let j = 0; j < numAsString.length; j++) {
            let currentDigit = Number(numAsString[j]);
            currentSum += currentDigit;
        }

        if (currentSum === 5 || currentSum === 7 || currentSum === 11) {
            console.log(`${currentNum} -> True`);
        } else {
            console.log(`${currentNum} -> False`);
        }
    }
}

specialNumbers(15);
specialNumbers(20);