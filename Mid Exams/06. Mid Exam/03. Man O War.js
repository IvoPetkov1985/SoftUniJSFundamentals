function manOWar(input) {
    let pirateShip = input.shift().split(">").map(x => Number(x));
    let warship = input.shift().split(">").map(x => Number(x));
    let maxHealthCapacity = Number(input.shift());

    let isGameOver = false;

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Retire") {
        let tokens = commandLine.split(" ");
        let command = tokens[0];

        if (command === "Fire") {
            let indexToDamage = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if (indexToDamage >= 0 && indexToDamage < warship.length) {
                warship[indexToDamage] -= damage;

                if (warship[indexToDamage] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    isGameOver = true;
                    break;
                }
            }
        } else if (command === "Defend") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let damage = Number(tokens[3]);

            if (startIndex >= 0 && startIndex < pirateShip.length &&
                endIndex >= 0 && endIndex < pirateShip.length) {

                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;

                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        isGameOver = true;
                        break;
                    }
                }
            }
        } else if (command === "Repair") {
            let indexToRepair = Number(tokens[1]);
            let health = Number(tokens[2]);

            if (indexToRepair >= 0 && indexToRepair < pirateShip.length) {
                pirateShip[indexToRepair] += health;

                if (pirateShip[indexToRepair] > maxHealthCapacity) {
                    pirateShip[indexToRepair] = maxHealthCapacity;
                }
            }
        } else if (command === "Status") {
            let countOfSections = pirateShip.filter(s => s < maxHealthCapacity * 0.20).length;
            console.log(`${countOfSections} sections need repair.`);
        }

        index++;
        commandLine = input[index];
    }

    if (!isGameOver) {
        let pirateShipSum = pirateShip.reduce((sum, x) => {
            return sum + x;
        }, 0);

        let warshipSum = warship.reduce((sum, x) => {
            return sum + x;
        }, 0);

        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]
);

manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]
);