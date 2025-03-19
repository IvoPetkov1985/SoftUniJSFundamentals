function passwordReset(input) {
    let password = input.shift();

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Done") {
        let tokens = commandLine.split(" ");
        let command = tokens[0];

        switch (command) {
            case "TakeOdd":
                password = password.split("")
                    .filter((x, i) => i % 2 !== 0)
                    .join("");

                console.log(password);
                break;
            case "Cut":
                let startIndex = Number(tokens[1]);
                let stringLength = Number(tokens[2]);
                let fragment = password.substring(startIndex, startIndex + stringLength);
                password = password.replace(fragment, "");
                console.log(password);
                break;
            case "Substitute":
                let oldSubstring = tokens[1];
                let newSubstring = tokens[2];

                if (password.includes(oldSubstring)) {

                    while (password.indexOf(oldSubstring) > -1) {
                        password = password.replace(oldSubstring, newSubstring);
                    }

                    console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }

                break;
        }

        index++;
        commandLine = input[index];
    }

    console.log(`Your password is: ${password}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]
);

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]
);