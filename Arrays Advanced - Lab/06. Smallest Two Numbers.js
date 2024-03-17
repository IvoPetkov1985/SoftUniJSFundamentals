function smallestTwoNumbers(inputArray) {
    let sortedArr = inputArray.sort((a, b) => a - b);
    let firstTwoNums = sortedArr.slice(0, 2);
    let resultString = firstTwoNums.join(" ");
    console.log(resultString);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

function smallestTwoNumbers2(array) {
    let sorted = array.sort((x, y) => x - y);
    let spliced = sorted.splice(0, 2);
    console.log(spliced.join(" "));
}

smallestTwoNumbers2([30, 15, 50, 5]);
smallestTwoNumbers2([3, 0, 10, 4, 7, 3]);