function heartDelivery(input) {
    let array = input.shift().split("@").map(x => Number(x));

    let index = 0;
    let commandLine = input[index];

    let cupidIndex = 0;

    while (commandLine != "Love!") {
        let commandTokens = commandLine.split(" ");
        let jumpLength = Number(commandTokens[1]);

        cupidIndex += jumpLength;

        if (cupidIndex >= array.length) {
            cupidIndex = 0;
        }

        if (array[cupidIndex] == 0) {
            console.log(`Place ${cupidIndex} already had Valentine's day.`);
        } else {
            array[cupidIndex] -= 2;

            if (array[cupidIndex] == 0) {
                console.log(`Place ${cupidIndex} has Valentine's day.`);
            }
        }

        index++;
        commandLine = input[index];
    }

    console.log(`Cupid's last position was ${cupidIndex}.`);

    if (array.every(x => x == 0)) {
        console.log("Mission was successful.");
    } else {
        let failedPlaces = array.filter(x => x != 0).length;
        console.log(`Cupid has failed ${failedPlaces} places.`);
    }
}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);

heartDelivery(["4@2@4@2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 2",
    "Jump 2",
    "Love!"]);