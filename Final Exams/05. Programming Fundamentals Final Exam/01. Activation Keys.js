function activationKeys(input) {
    let key = input.shift();
    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Generate") {
        let tokens = commandLine.split(">>>");
        let command = tokens[0];

        if (command === "Contains") {
            let substr = tokens[1];

            if (key.includes(substr)) {
                console.log(`${key} contains ${substr}`);
            } else {
                console.log("Substring not found!");
            }

        } else if (command === "Flip") {
            let caseCommand = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);
            let oldSubstr = key.substring(startIndex, endIndex);

            if (caseCommand === "Upper") {
                let newSubstr = oldSubstr.toUpperCase();
                key = key.replace(oldSubstr, newSubstr);
            } else if (caseCommand === "Lower") {
                let lowerSubstr = oldSubstr.toLowerCase();
                key = key.replace(oldSubstr, lowerSubstr);
            }

            console.log(key);

        } else if (command === "Slice") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let substr = key.substring(startIndex, endIndex);
            key = key.replace(substr, "");
            console.log(key);
        }

        index++;
        commandLine = input[index];
    }

    console.log(`Your activation key is: ${key}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]
);

activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]
);