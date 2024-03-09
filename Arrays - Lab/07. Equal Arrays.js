function equalArrays(firstArray, secondArray) {
    let sum = 0;
    let areIdentical = true;

    const arrayLength = firstArray.length;

    for (let i = 0; i < arrayLength; i++) {

        if (firstArray[i] !== secondArray[i]) {
            areIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }

        let currentNumber = Number(firstArray[i]);
        sum += currentNumber;
    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);

function equalArrays2(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }

    let sum = 0;
    let areIdentical = true;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i]) {
            areIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }

        sum += arr1[i];
    }

    if (areIdentical === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays2(['10', '20', '30'], ['10', '20', '30']);
equalArrays2(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays2(['1'], ['10']);