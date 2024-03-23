function arrayModifier(input) {
    let array = input.shift().split(" ").map(Number);

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "end") {
        let [command, firstIndex, secondIndex] = commandLine.split(" ");

        if (command == "swap") {
            [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
        } else if (command == "multiply") {
            array[firstIndex] = array[firstIndex] * array[secondIndex];
        } else if (command == "decrease") {
            array = array.map(x => x - 1);
        } else if (command == "end") {
            break;
        }

        index++;
        commandLine = input[index];
    }

    console.log(array.join(", "));
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