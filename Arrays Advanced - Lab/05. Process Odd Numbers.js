function processOddNumbers(inputArray) {
    let arrayWithOdds = inputArray.filter((x, i) => i % 2 === 1);
    let reversedArr = arrayWithOdds.reverse();
    let doubledArr = reversedArr.map(x => x * 2);
    let resultString = doubledArr.join(" ");
    console.log(resultString);
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);

function processOddNums(array) {
    console.log(array.filter((x, i) => i % 2 !== 0).map(x => x * 2).reverse().join(" "));
}

processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3]);