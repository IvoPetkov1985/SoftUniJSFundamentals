function meetings(inputArray) {
    let schedule = {};

    for (let line of inputArray) {
        let [day, name] = line.split(" ");

        if (day in schedule) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);