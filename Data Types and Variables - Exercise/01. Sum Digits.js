function sumDigits(num) {
    let numAsString = num.toString();
    let sum = 0;

    for (let char of numAsString) {
        let currentDigit = Number(char);
        sum += currentDigit;
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);

function sumDigits2(num) {
    let sum = 0;

    while (num > 0) {
        let currentDigit = num % 10;
        sum += currentDigit;
        num = Math.trunc(num / 10);
    }

    console.log(sum);
}

sumDigits2(543);
sumDigits2(245678);
sumDigits2(97561);