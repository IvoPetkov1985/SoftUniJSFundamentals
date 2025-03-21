function fancySecretChat(input) {
    let message = input[0];
    let index = 1;
    let commandLine = input[index];

    while (commandLine !== "Reveal") {
        let tokens = commandLine.split(":|:");
        let currentCommand = tokens[0];

        switch (currentCommand) {
            case "InsertSpace":
                let idx = Number(tokens[1]);
                let firstPart = message.slice(0, idx);
                let secondPart = message.slice(idx);
                message = `${firstPart} ${secondPart}`;
                console.log(message);
                break;

            case "Reverse":
                let fragment = tokens[1];

                if (message.includes(fragment)) {
                    let reversedFragment = fragment.split("").reverse().join("");
                    message = message.replace(fragment, "") + reversedFragment;
                    console.log(message);
                } else {
                    console.log("error");
                }
                break;

            case "ChangeAll":
                let substringToChange = tokens[1];
                let substringToReplace = tokens[2];
                let pattern = new RegExp(substringToChange, "g");
                message = message.replace(pattern, substringToReplace);
                console.log(message);
                break;
        }

        index++;
        commandLine = input[index];
    }

    console.log(`You have a new text message: ${message}`);
}

fancySecretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

fancySecretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);