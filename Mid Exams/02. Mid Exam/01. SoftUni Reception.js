function reception(input) {
    const firstEmployee = Number(input[0]);
    const secondEmployee = Number(input[1]);
    const thirdEmployee = Number(input[2]);

    const studentsPerHour = firstEmployee + secondEmployee + thirdEmployee;

    let studentsWaiting = Number(input[3]);
    let hours = 0;

    while (studentsWaiting > 0) {
        hours++;
        studentsWaiting -= studentsPerHour;

        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

reception(['5', '6', '4', '20']);
reception(['1', '2', '3', '45']);
reception(['3', '2', '5', '40']);