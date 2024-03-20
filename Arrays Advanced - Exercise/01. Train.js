function train(input) {
    let trainArray = input.shift().split(" ").map(x => Number(x));
    let maxCapacity = Number(input.shift());

    for (let commandLine of input) {
        let tokens = commandLine.split(" ");

        if (tokens[0] === "Add") {
            let wagon = Number(tokens[1]);
            trainArray.push(wagon);
        } else {
            let passengersToAdd = Number(tokens[0]);

            for (let i = 0; i < trainArray.length; i++) {

                if (passengersToAdd + trainArray[i] <= maxCapacity) {
                    trainArray[i] += passengersToAdd;
                    break;
                }
            }
        }
    }

    let result = trainArray.join(" ");
    console.log(result);
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);