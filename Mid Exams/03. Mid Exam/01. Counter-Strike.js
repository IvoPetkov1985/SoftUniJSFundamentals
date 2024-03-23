function counterStrike(input) {
    let energy = Number(input.shift());
    let battles = 0;

    let index = 0;
    let command = input[index];
    let hasEnergy = true;

    while (command !== "End of battle") {
        let distance = Number(command);

        if (energy < distance) {
            console.log(`Not enough energy! Game ends with ${battles} won battles and ${energy} energy`);
            hasEnergy = false;
            break;
        }

        energy -= distance;
        battles++;

        if (battles % 3 === 0) {
            energy += battles;
        }

        index++;
        command = input[index];
    }

    if (hasEnergy) {
        console.log(`Won battles: ${battles}. Energy left: ${energy}`);
    }
}

counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);

counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);