function heartDelivery(input) {
    let array = input.shift().split("@").map(x => Number(x));

    let cupidIdx = 0;

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Love!") {
        let tokens = commandLine.split(" ");
        let distance = Number(tokens[1]);

        cupidIdx += distance;

        if (cupidIdx >= array.length) {
            cupidIdx = 0;
        }

        if (array[cupidIdx] === 0) {
            console.log(`Place ${cupidIdx} already had Valentine's day.`);
        } else {
            array[cupidIdx] -= 2;

            if (array[cupidIdx] === 0) {
                console.log(`Place ${cupidIdx} has Valentine's day.`);
            }
        }

        index++;
        commandLine = input[index];
    }

    console.log(`Cupid's last position was ${cupidIdx}.`);

    if (array.every(x => x === 0)) {
        console.log("Mission was successful.");
    } else {
        let houseCount = array.filter(x => x !== 0).length;
        console.log(`Cupid has failed ${houseCount} places.`);
    }
}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]
);

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]
);