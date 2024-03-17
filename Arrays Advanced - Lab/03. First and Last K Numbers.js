function firstAndLastKNumbers(inputData) {
    let k = inputData.shift();

    let firstNumsArr = inputData.slice(0, k);
    let lastNumsArr = inputData.slice(k * -1);

    console.log(firstNumsArr.join(" "));
    console.log(lastNumsArr.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);