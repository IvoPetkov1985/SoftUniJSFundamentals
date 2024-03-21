function arrayManipulator(array, manipulations) {
    for (let commandLine of manipulations) {
        let tokens = commandLine.split(" ");
        let command = tokens[0];
        let printCommandReached = false;

        switch (command) {
            case "add":
                let indexToAdd = Number(tokens[1]);
                let elementToAdd = Number(tokens[2]);
                array.splice(indexToAdd, 0, elementToAdd);
                break;
            case "addMany":
                let indexToStart = Number(tokens[1]);
                let allElements = [];

                for (let i = 2; i < tokens.length; i++) {
                    let numToAdd = Number(tokens[i]);
                    allElements.push(numToAdd);
                }

                array.splice(indexToStart, 0, ...allElements);
                break;
            case "contains":
                let elementToContain = Number(tokens[1]);
                let indexToPrint = array.indexOf(elementToContain);
                console.log(indexToPrint);
                break;
            case "remove":
                let indexToRemove = Number(tokens[1]);
                array.splice(indexToRemove, 1);
                break;
            case "shift":
                let rotations = Number(tokens[1]);

                for (let i = 1; i <= rotations; i++) {
                    let firstElement = array.shift();
                    array.push(firstElement);
                }

                break;
            case "sumPairs":
                let arrayWithSums = [];

                while (array.length > 0) {
                    let currentPair = array.splice(0, 2);

                    if (currentPair[1] !== undefined) {
                        arrayWithSums.push(currentPair[0] + currentPair[1]);
                    } else {
                        arrayWithSums.push(currentPair[0]);
                    }
                }

                array = arrayWithSums;
                break;
            case "print":
                let resultString = array.join(", ");
                console.log(`[ ${resultString} ]`);
                printCommandReached = true;
                break;
        }

        if (printCommandReached) {
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