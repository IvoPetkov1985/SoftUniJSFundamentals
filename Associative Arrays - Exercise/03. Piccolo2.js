function piccolo(inputArray) {
    let cars = new Set();

    for (let commandLine of inputArray) {
        let tokens = commandLine.split(", ");
        let command = tokens[0];
        let regNumber = tokens[1];

        switch (command) {
            case "IN": cars.add(regNumber); break;
            case "OUT": cars.delete(regNumber); break;
        }
    }

    if (cars.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sorted = Array.from(cars).sort((a, b) => a.localeCompare(b));
        sorted.forEach(plate => console.log(plate));
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);

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