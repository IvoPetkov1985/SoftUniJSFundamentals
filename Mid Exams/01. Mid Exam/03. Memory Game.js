function memoryGame(input) {
    let sequence = input.shift().split(" ");

    let index = 0;
    let command = input[index];

    while (command !== "end") {
        let indices = command.split(" ");
        let firstIndex = Number(indices[0]);
        let secondIndex = Number(indices[1]);

        if (firstIndex === secondIndex || firstIndex < 0 || firstIndex >= sequence.length ||
            secondIndex < 0 || secondIndex >= sequence.length) {
            let newElement = `-${index + 1}a`;
            sequence.splice(sequence.length / 2, 0, newElement, newElement);
            console.log("Invalid input! Adding additional elements to the board");
        } else {
            if (sequence[firstIndex] === sequence[secondIndex]) {
                let foundElement = sequence[firstIndex];
                sequence.splice(firstIndex, 1);
                let doubledElementIndex = sequence.indexOf(foundElement);
                sequence.splice(doubledElementIndex, 1);
                console.log(`Congrats! You have found matching elements - ${foundElement}!`);
            } else {
                console.log("Try again!");
            }
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${index + 1} turns!`);
            break;
        }

        index++;
        command = input[index];
    }

    if (command === "end") {
        console.log("Sorry you lose :(");
        console.log(sequence.join(" "));
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);

memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);