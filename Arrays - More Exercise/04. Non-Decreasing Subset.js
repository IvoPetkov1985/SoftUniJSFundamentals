function nonDecreasingSubset(array) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let resultArray = [];

    for (let number of array) {

        if (number >= biggestNum) {
            biggestNum = number;
            resultArray.push(biggestNum);
        }
    }

    let finalResult = resultArray.join(" ");
    console.log(finalResult);
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);