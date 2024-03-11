function printNThElement(array) {
    const step = Number(array.pop());
    const arrayLength = array.length;

    let resultArray = [];

    for (let i = 0; i < arrayLength; i += step) {
        resultArray.push(array[i]);
    }

    let resultString = resultArray.join(" ");
    console.log(resultString);
}

printNThElement(['5', '20', '31', '4', '20', '2']);
printNThElement(['dsa', 'asd', 'test', 'test', '2']);
printNThElement(['1', '2', '3', '4', '5', '6']);