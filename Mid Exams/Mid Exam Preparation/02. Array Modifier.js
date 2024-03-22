function arrayModifier(input) {
    let array = input.shift().split(" ").map(x => Number(x));

    let index = 0;
    let commandLine = input[index];

    while (commandLine != "end") {
        let tokens = commandLine.split(" ");
        let command = tokens[0];
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);

        if (command == "swap") {
            let buff = array[index1];
            array[index1] = array[index2];
            array[index2] = buff;
        } else if (command == "multiply") {
            let product = array[index1] * array[index2];
            array[index1] = product;
        } else if (command == "decrease") {
            array = array.map(x => x - 1);
        }

        index++;
        commandLine = input[index];
    }

    let output = array.join(", ");
    console.log(output);
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);