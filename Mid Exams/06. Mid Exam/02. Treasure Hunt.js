function treasureHunt(input) {
    let treasureChest = input.shift().split("|");

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Yohoho!") {
        let tokens = commandLine.split(" ");
        let currentCommand = tokens.shift();

        if (currentCommand === "Loot") {
            for (let item of tokens) {
                if (!treasureChest.includes(item)) {
                    treasureChest.splice(0, 0, item);
                }
            }
        } else if (currentCommand === "Drop") {
            let indexOfDroppedItem = Number(tokens[0]);

            if (indexOfDroppedItem >= 0 && indexOfDroppedItem < treasureChest.length) {
                let currentItem = treasureChest.splice(indexOfDroppedItem, 1)[0];
                treasureChest.push(currentItem);
            }
        } else if (currentCommand === "Steal") {
            let count = Number(tokens[0]);

            let startIndex = treasureChest.length - count;

            if (startIndex < 0) {
                startIndex = 0;
            }

            let stolenItems = treasureChest.splice(startIndex, count);
            console.log(stolenItems.join(", "));
        }

        index++;
        commandLine = input[index];
    }

    if (treasureChest.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sumLengths = treasureChest.reduce((sum, x) => {
            return sum + x.length;
        }, 0);

        let average = sumLengths / treasureChest.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]
);

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]
);