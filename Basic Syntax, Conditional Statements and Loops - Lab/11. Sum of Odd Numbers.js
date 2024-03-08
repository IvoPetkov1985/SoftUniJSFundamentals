function sumOfOddNumbers(inputNum) {
    const initialNum = 1;
    const iterations = Number(inputNum);
    let sum = 0;
    let current = initialNum;

    for (let i = 1; i <= iterations; i++) {
        console.log(current);
        sum += current;
        current += 2;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);

function sumOfOddNumbersAlt(num) {
    const numberOfIterations = Number(num);
    const startingNum = 1;

    let oddNumbers = [];
    let currentNum = startingNum;

    for (let i = 1; i <= numberOfIterations; i++) {
        console.log(currentNum);
        oddNumbers.push(currentNum);
        currentNum += 2;
    }

    let totalSum = 0;
    oddNumbers.forEach(num => {totalSum += num});

    console.log(`Sum: ${totalSum}`);
}

sumOfOddNumbersAlt(11);
sumOfOddNumbersAlt(3);