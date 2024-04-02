function race(input) {
    let names = input.shift().split(", ");
    let participants = {};

    for (let name of names) {
        participants[name] = 0;
    }

    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    let index = 0;
    let line = input[index];

    while (line !== "end of race") {
        let matches = line.match(letterPattern);
        let currentName = matches.join("");

        let matchesByDigits = line.match(digitPattern);
        let currentDistance = matchesByDigits.map(Number)
            .reduce((acc, val) => acc + val, 0);

        if (participants.hasOwnProperty(currentName)) {
            participants[currentName] += currentDistance;
        }


        index++;
        line = input[index];
    }

    let sortedArray = Object.entries(participants).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedArray[0][0]}`);
    console.log(`2nd place: ${sortedArray[1][0]}`);
    console.log(`3rd place: ${sortedArray[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
);