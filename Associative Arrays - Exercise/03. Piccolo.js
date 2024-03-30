function piccolo(inputArray) {
    let parking = new Set();

    for (let line of inputArray) {
        let [command, regNumber] = line.split(", ");

        if (command === "IN") {
            parking.add(regNumber);
        } else if (command === "OUT") {
            parking.delete(regNumber);
        }
    }

    let sortedRegNumbers = Array.from(parking).sort((a, b) => a.localeCompare(b));

    if (sortedRegNumbers.length > 0) {
        sortedRegNumbers.forEach(x => console.log(x));
    } else {
        console.log("Parking Lot is Empty");
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);