function worldTour(input) {
    let stops = input.shift();
    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Travel") {
        let tokens = commandLine.split(":");
        let command = tokens[0];

        if (command === "Add Stop") {
            let idx = Number(tokens[1]);
            let newStop = tokens[2];

            if (isIndexValid(idx)) {
                let firstSubstring = stops.substring(0, idx);
                let lastSubstring = stops.substring(idx);
                stops = firstSubstring + newStop + lastSubstring;
            }

            console.log(stops);
        } else if (command === "Remove Stop") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            if (isIndexValid(startIndex) && isIndexValid(endIndex)) {
                let substringToRemove = stops.substring(startIndex, endIndex + 1);
                stops = stops.replace(substringToRemove, "");
            }

            console.log(stops);
        } else if (command === "Switch") {
            let oldString = tokens[1];
            let newString = tokens[2];

            if (stops.includes(oldString)) {
                let pattern = new RegExp(oldString, "g");
                stops = stops.replace(pattern, newString);
            }

            console.log(stops);
        }

        index++;
        commandLine = input[index];
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

    function isIndexValid(number) {
        return number >= 0 && number < stops.length;
    }
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]
);

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]
);