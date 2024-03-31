function partyTime(inputArray) {
    let guestsObject = {
        vipGuests: [],
        regularGuests: []
    };

    let guestId = inputArray.shift();

    while (guestId !== "PARTY") {
        let currentStartLetter = guestId[0];

        if (isNaN(currentStartLetter)) {
            guestsObject.regularGuests.push(guestId);
        } else {
            guestsObject.vipGuests.push(guestId);
        }

        guestId = inputArray.shift();
    }

    for (let guestId of inputArray) {
        let startingLetter = guestId[0];

        if (isNaN(startingLetter)) {
            if (guestsObject.regularGuests.includes(guestId)) {
                let guestIndex = guestsObject.regularGuests.indexOf(guestId);
                guestsObject.regularGuests.splice(guestIndex, 1);
            }
        } else {
            if (guestsObject.vipGuests.includes(guestId)) {
                let vipGuestIndex = guestsObject.vipGuests.indexOf(guestId);
                guestsObject.vipGuests.splice(vipGuestIndex, 1);
            }
        }
    }

    let totalNotComeGuests = guestsObject.vipGuests.length + guestsObject.regularGuests.length;

    console.log(totalNotComeGuests);
    guestsObject.vipGuests.forEach(guest => console.log(guest));
    guestsObject.regularGuests.forEach(guest => console.log(guest));
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