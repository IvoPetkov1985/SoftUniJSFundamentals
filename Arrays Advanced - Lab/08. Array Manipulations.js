function arrayManipulations(input) {
    let arrayAsString = input.shift();
    let inputArray = arrayAsString.split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        [command, firstNum, secondNum] = input[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                inputArray.push(firstNum);
                break;
            case "Remove":
                inputArray = inputArray.filter(x => x !== firstNum);
                break;
            case "RemoveAt":
                inputArray.splice(firstNum, 1);
                break;
            case "Insert":
                inputArray.splice(secondNum, 0, firstNum);
                break;
        }
    }

    let result = inputArray.join(" ");
    console.log(result);
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
);