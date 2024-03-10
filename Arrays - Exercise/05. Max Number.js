function maxNumber(inputArray) {
    const arrayLength = inputArray.length;
    let topNumbersArray = [];

    for (let i = 0; i < arrayLength; i++) {
        let currentNum = inputArray[i];
        let isTop = true;

        for (let j = i + 1; j < arrayLength; j++) {

            if (inputArray[j] >= currentNum) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topNumbersArray.push(currentNum);
        }
    }

    let result = topNumbersArray.join(" ");
    console.log(result);
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);