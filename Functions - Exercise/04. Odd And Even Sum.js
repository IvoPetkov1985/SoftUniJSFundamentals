function oddAndEvenSum(number) {
    let numAsString = number.toString();

    let [oddSum, evenSum] = summator(numAsString);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function summator(numAsStr) {
        let oddSum = 0;
        let evenSum = 0;

        for (let char of numAsStr) {
            let digit = Number(char);

            if (digit % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }

        return [oddSum, evenSum];
    }
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);