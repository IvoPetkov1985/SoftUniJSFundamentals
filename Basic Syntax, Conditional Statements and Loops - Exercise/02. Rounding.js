function rounding(inputNumber, precision) {
    if (precision > 15) {
        precision = 15;
    }

    let fixedNumber = inputNumber.toFixed(precision);
    let resultNumber = parseFloat(fixedNumber);
    console.log(resultNumber);
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);