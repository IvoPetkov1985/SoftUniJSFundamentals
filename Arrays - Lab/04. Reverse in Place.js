function reverseInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let j = array.length - 1 - i;
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let resultString = array.join(" ");
    console.log(resultString);
}

// reverseInPlace(['a', 'b', 'c', 'd', 'e']);
// reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseInPlace(['33', '123', '0', 'dd']);

function reverseInPlace2(array) {
    console.log(array.reverse().join(" "));
}

// reverseInPlace2(['a', 'b', 'c', 'd', 'e']);
// reverseInPlace2(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseInPlace2(['33', '123', '0', 'dd']);

function reverseInPlace3(inputArray) {
    let arrayLength = inputArray.length;
    for (let i = 0; i < arrayLength / 2; i++) {
        let j = arrayLength - 1 - i;
        [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
    }

    let resultString = "";

    for (let element of inputArray) {
        resultString += element + " ";
    }

    console.log(resultString);
}

reverseInPlace3(['a', 'b', 'c', 'd', 'e']);
reverseInPlace3(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace3(['33', '123', '0', 'dd']);