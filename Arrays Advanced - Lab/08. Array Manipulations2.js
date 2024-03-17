function arrayManupulations(input) {
    let array = input.shift().split(" ").map(x => Number(x));

    for (let commandLine of input) {
        let tokens = commandLine.split(" ");
        let command = tokens[0];
        let firstNum = Number(tokens[1]);

        if (command === "Add") {
            array.push(firstNum);
        } else if (command === "Remove") {
            array = array.filter(x => x !== firstNum);
        } else if (command === "RemoveAt") {
            array.splice(firstNum, 1);
        } else if (command === "Insert") {
            let secondNum = Number(tokens[2]);
            array.splice(secondNum, 0, firstNum);
        }
    }

    let finalResult = array.join(" ");
    console.log(finalResult);
}

arrayManupulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);

arrayManupulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
);