function secretChat(input) {
    let concealedMsg = input.shift();

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Reveal") {
        let commandTokens = commandLine.split(":|:");
        let command = commandTokens[0];

        if (command === "InsertSpace") {
            let idx = Number(commandTokens[1]);
            let firstSubstring = concealedMsg.substring(0, idx);
            let secondSubstring = concealedMsg.substring(idx);
            concealedMsg = firstSubstring + " " + secondSubstring;
            console.log(concealedMsg);
        } else if (command === "Reverse") {
            let substringToReverse = commandTokens[1];

            if (concealedMsg.includes(substringToReverse)) {
                concealedMsg = concealedMsg.replace(substringToReverse, "");
                substringToReverse = substringToReverse.split("").reverse().join("");
                concealedMsg += substringToReverse;
                console.log(concealedMsg);
            } else {
                console.log("error");
            }
        } else if (command === "ChangeAll") {
            let substring = commandTokens[1];
            let replacement = commandTokens[2];

            while (concealedMsg.includes(substring)) {
                concealedMsg = concealedMsg.replace(substring, replacement);
            }

            console.log(concealedMsg);
        }

        index++;
        commandLine = input[index];
    }

    console.log(`You have a new text message: ${concealedMsg}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);