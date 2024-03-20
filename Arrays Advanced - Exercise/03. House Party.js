function houseParty(inputArray) {
    let guestList = [];

    for (let line of inputArray) {
        let lineTokens = line.split(" ");
        let guestName = lineTokens[0];

        if (lineTokens.includes("not")) {

            if (guestList.includes(guestName)) {
                let guestNameIndex = guestList.indexOf(guestName);
                guestList.splice(guestNameIndex, 1);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        } else {

            if (guestList.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                guestList.push(guestName);
            }
        }
    }

    guestList.forEach(g => console.log(g));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);