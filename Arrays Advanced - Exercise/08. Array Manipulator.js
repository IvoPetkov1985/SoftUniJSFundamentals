function arrayManipulator(inputArray, commands) {
    for (let line of commands) {
        let commandTokens = line.split(" ");
        let currentCommand = commandTokens[0];

        if (currentCommand === "add") {
            let index = Number(commandTokens[1]);
            let element = Number(commandTokens[2]);
            inputArray.splice(index, 0, element);
        } else if (currentCommand === "addMany") {
            let index = Number(commandTokens[1]);
            let elementsToAdd = [];

            for (let i = 2; i < commandTokens.length; i++) {
                let currNum = Number(commandTokens[i]);
                elementsToAdd.push(currNum);
            }

            inputArray.splice(index, 0, ...elementsToAdd);
        } else if (currentCommand === "contains") {
            let element = Number(commandTokens[1]);
            console.log(inputArray.indexOf(element));
        } else if (currentCommand === "remove") {
            let index = Number(commandTokens[1]);
            inputArray.splice(index, 1);
        } else if (currentCommand === "shift") {
            let positions = Number(commandTokens[1]);

            for (let i = 1; i <= positions; i++) {
                let firstElement = inputArray.shift();
                inputArray.push(firstElement);
            }
        } else if (currentCommand === "sumPairs") {
            let newArray = [];

            while (inputArray.length > 0) {
                let currentPair = inputArray.splice(0, 2);

                if (currentPair[1] !== undefined) {
                    newArray.push(currentPair[0] + currentPair[1]);
                } else {
                    newArray.push(currentPair[0]);
                }
            }

            inputArray = newArray;
        } else if (currentCommand === "print") {
            let stringToPrint = inputArray.join(", ");
            console.log(`[ ${stringToPrint} ]`);
            break;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);