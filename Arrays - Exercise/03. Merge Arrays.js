function mergeArrays(array1, array2) {
    const arrayLength = array1.length;
    let resultArray = [];

    for (let i = 0; i < arrayLength; i++) {

        if (i % 2 === 0) {
            let firstArrayNum = Number(array1[i]);
            let secondArrayNum = Number(array2[i]);
            let sum = firstArrayNum + secondArrayNum;
            resultArray[i] = sum;
        } else {
            let firstString = array1[i].toString();
            let secondString = array2[i].toString();
            let concatenated = firstString + secondString;
            resultArray[i] = concatenated;
        }
    }

    console.log(resultArray.join(" - "));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);

mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);