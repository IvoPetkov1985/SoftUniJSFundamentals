function movingTarget(input) {
    let targets = input.shift().split(" ").map(Number);

    let index = 0;
    let currentCommand = input[index];

    while (currentCommand !== "End") {
        let tokens = currentCommand.split(" ");
        let command = tokens[0];
        let targetIndex = Number(tokens[1]);
        let value = Number(tokens[2]);

        if (command === "Shoot") {
            if (targetIndex >= 0 && targetIndex < targets.length) {
                targets[targetIndex] -= value;

                if (targets[targetIndex] <= 0) {
                    targets.splice(targetIndex, 1);
                }
            }
        } else if (command === "Add") {
            if (targetIndex >= 0 && targetIndex < targets.length) {
                targets.splice(targetIndex, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === "Strike") {
            let startIndex = targetIndex - value;
            let endIndex = targetIndex + value;

            if (startIndex < 0 || endIndex >= targets.length) {
                console.log("Strike missed!");
            } else {
                targets.splice(startIndex, endIndex - startIndex + 1);
            }
        }

        index++;
        currentCommand = input[index];
    }

    console.log(targets.join("|"));
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);

movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);