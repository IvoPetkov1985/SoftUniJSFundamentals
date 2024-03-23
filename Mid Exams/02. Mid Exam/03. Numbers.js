function numbers(input) {
    let numbersAsArray = input.split(" ").map(x => Number(x));
    
    let sum = numbersAsArray.reduce((currSum, num) => {
        return currSum + num;
    }, 0);

    let averageValue = sum / numbersAsArray.length;
    
    let filtered = numbersAsArray.filter(x => x > averageValue);
    let sortedByDescending = filtered.sort((x, y) => y - x);

    if (sortedByDescending.length >= 1) {
        console.log(sortedByDescending.slice(0, 5).join(" "));
    } else {
        console.log("No");
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');