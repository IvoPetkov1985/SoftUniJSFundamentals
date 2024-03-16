function loadingBar(inputNumber) {
    const dividedNumber = inputNumber / 10;
    let resultString = "[";

    let progressString = "%".repeat(dividedNumber);
    resultString = resultString.concat(progressString);

    let residueString = ".".repeat(10 - dividedNumber);
    resultString = resultString.concat(residueString + "]");

    if (dividedNumber === 10) {
        console.log(`${inputNumber}% Complete!`);
        console.log(resultString);
    } else {
        console.log(`${inputNumber}% ${resultString}`);
        console.log("Still loading...");
    }
}

// loadingBar(100);
// loadingBar(50);
// loadingBar(30);

function loadingSign(number) {
    const inputNum = Number(number);
    const temporaryValue = inputNum / 10;
    const maxValue = 10;

    let progressSubstr = "%".repeat(temporaryValue);
    let notFullSubstr = ".".repeat(maxValue - temporaryValue);

    let finalStr = concatenate(progressSubstr, notFullSubstr);

    resultPrinter(finalStr, temporaryValue, maxValue);

    function concatenate(firstPart, secondPart) {
        let str = "[" + firstPart + secondPart + "]";
        return str;
    }

    function resultPrinter(resultString, temp, max) {
        const percentage = temp * 10;
        const maxPercentage = max * 10;

        if (temp === max) {
            console.log(`${maxPercentage}% Complete!`);
            console.log(resultString);
        } else {
            console.log(`${percentage}% ${resultString}`);
            console.log("Still loading...");
        }
    }
}

loadingSign(30);
loadingSign(50);
loadingSign(100);