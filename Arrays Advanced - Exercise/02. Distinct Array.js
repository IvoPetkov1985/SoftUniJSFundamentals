function distinctArray(inputArray) {
    let resultArray = [];

    for (let element of inputArray) {

        if (!resultArray.includes(element)) {
            resultArray.push(element);
        }
    }

    let result = resultArray.join(" ");
    console.log(result);
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);