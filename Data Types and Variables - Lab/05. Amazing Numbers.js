function amazingNumbers(inputNum) {
    let numAsString = String(inputNum);
    let sumDigits = 0;

    for (let char of numAsString) {
        let currentDigit = Number(char);
        sumDigits += currentDigit;
    }

    let sumAsString = String(sumDigits);

    if (sumAsString.includes("9")) {
        console.log(`${inputNum} Amazing? True`);
    } else {
        console.log(`${inputNum} Amazing? False`);
    }
}

amazingNumbers(1233);
amazingNumbers(999);

function amazingNums(num) {
    let numAsString = num.toString();
    let numAsArrayOfNums = numAsString.split("").map(x => Number(x));
    let sum = numAsArrayOfNums.reduce((sumDigits, x) => {
        return sumDigits + x;
    }, 0);

    let sumAsString = sum.toString();
    sumAsString.includes("9") ?
        console.log(`${num} Amazing? True`) :
        console.log(`${num} Amazing? False`);
}

amazingNums(1233);
amazingNums(999);