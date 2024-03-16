function sumFirstAndLast(array) {
    let numArray = array.map(x => Number(x));
    let firstNum = numArray.shift();
    let lastNum = numArray.pop();
    let sum = firstNum + lastNum;
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);

function sumFirstAndLastNums(inputArray) {
    let first = Number(inputArray[0]);
    let last = Number(inputArray[inputArray.length - 1]);
    let result = first + last;
    console.log(result);
}

sumFirstAndLastNums(['20', '30', '40']);
sumFirstAndLastNums(['5', '10']);