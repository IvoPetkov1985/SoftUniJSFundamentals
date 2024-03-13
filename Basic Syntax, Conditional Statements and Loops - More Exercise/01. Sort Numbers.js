function sortNumbers(num1, num2, num3) {
    let arrayOfNums = [];
    arrayOfNums.push(num1);
    arrayOfNums.push(num2);
    arrayOfNums.push(num3);
    let sorted = arrayOfNums.sort((a, b) => b - a);
    sorted.forEach(x => console.log(x));
}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);