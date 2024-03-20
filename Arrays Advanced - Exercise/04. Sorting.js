function sorting(inputArray) {
    let sortedByDesc = inputArray.sort((a, b) => b - a);
    let arrayLength = sortedByDesc.length;
    let resultArray = [];
    
    for (let i = 0; i < arrayLength / 2; i++) {
        let currentBiggest = sortedByDesc.shift();
        let currentSmallest = sortedByDesc.pop();
        resultArray.push(currentBiggest);
        resultArray.push(currentSmallest);
    }

    let result = resultArray.join(" ");
    console.log(result);
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);