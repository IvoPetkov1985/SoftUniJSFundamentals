function partyTime(inputArray) {
    let vipGuests = [];
    let regularGuests = [];

    let currentGuest = inputArray.shift();

    while (currentGuest !== "PARTY") {
        let firstSymbol = currentGuest[0];

        if (!isNaN(firstSymbol)) {
            vipGuests.push(currentGuest);
        } else {
            regularGuests.push(currentGuest);
        }

        currentGuest = inputArray.shift();
    }

    let allGuests = vipGuests.concat(regularGuests);

    for (let goingGuest of inputArray) {
        if (allGuests.includes(goingGuest)) {
            let guestIndex = allGuests.indexOf(goingGuest);
            allGuests.splice(guestIndex, 1);
        }
    }

    console.log(allGuests.length);
    console.log(allGuests.join("\n"));
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);