function negativeOrPositiveNums(inputArray) {
    let myArray = new Array();
    let numArray = inputArray.map(x => Number(x));

    for (let num of numArray) {
        if (num < 0) {
            myArray.unshift(num);
        } else {
            myArray.push(num);
        }
    }

    let result = myArray.join("\n");
    console.log(result);
}

negativeOrPositiveNums(['7', '-2', '8', '9']);
negativeOrPositiveNums(['3', '-2', '0', '-1']);

function negOrPosNumbers(array) {
    let resultArray = [];

    for (let element of array) {
        let currNumber = Number(element);

        if (currNumber < 0) {
            resultArray.unshift(currNumber);
        } else {
            resultArray.push(currNumber);
        }
    }

    resultArray.forEach(x => console.log(x));
}

negOrPosNumbers(['3', '-2', '0', '-1']);
negOrPosNumbers(['7', '-2', '8', '9']);