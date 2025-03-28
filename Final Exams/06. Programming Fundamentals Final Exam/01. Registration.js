function registration(input) {
    let username = input.shift();

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Registration") {
        let tokens = commandLine.split(" ");
        let command = tokens[0];

        if (command === "Letters") {
            let lettersCase = tokens[1];

            switch (lettersCase) {
                case "Upper":
                    username = username.toUpperCase();
                    break;

                case "Lower":
                    username = username.toLowerCase();
                    break;
            }
            console.log(username);

        } else if (command === "Reverse") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            if (startIndex >= 0 && startIndex < username.length
                && endIndex >= 0 && endIndex < username.length) {

                let fragmentToReverse = username.substring(startIndex, endIndex + 1);
                let newFragment = fragmentToReverse.split("").reverse().join("");
                console.log(newFragment);
            }

        } else if (command === "Substring") {
            let substr = tokens[1];

            if (username.includes(substr)) {
                console.log(username.replace(substr, ""));
            } else {
                console.log(`The username ${username} doesn't contain ${substr}.`);
            }

        } else if (command === "Replace") {
            let char = tokens[1];

            while (username.includes(char)) {
                username = username.replace(char, "-");
            }
            console.log(username);

        } else if (command === "IsValid") {
            let searchedChar = tokens[1];

            if (username.includes(searchedChar)) {
                console.log("Valid username.");
            } else {
                console.log(`${searchedChar} must be contained in your username.`);
            }
        }

        index++;
        commandLine = input[index];
    }
}

registration(["John",
    "Letters Lower",
    "Substring SA",
    "IsValid @",
    "Registration"
]);

registration(["ThisIsSoftUni",
    "Reverse 1 3",
    "Replace S",
    "Substring hi",
    "Registration"
]);