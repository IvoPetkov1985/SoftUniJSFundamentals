function shootForTheWin(input) {
    let targets = input.shift().split(" ").map(Number);

    let index = 0;
    let command = input[index];

    while (command !== "End") {
        let indexToShoot = Number(command);

        if (indexToShoot >= 0 && indexToShoot < targets.length && targets[indexToShoot] !== -1) {
            let currentValue = targets[indexToShoot];
            targets[indexToShoot] = -1;

            for (let i = 0; i < targets.length; i++) {
                if (targets[i] > currentValue && targets[i] !== -1) {
                    targets[i] -= currentValue;
                } else if (targets[i] <= currentValue && targets[i] !== -1) {
                    targets[i] += currentValue;
                }
            }
        }

        index++;
        command = input[index];
    }

    let targetsShot = targets.filter(x => x === -1).length;
    let outputTargets = targets.join(" ");

    console.log(`Shot targets: ${targetsShot} -> ${outputTargets}`);
}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);

shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);