function imitationGame(input) {
    let message = input[0];

    let index = 1;
    let instruction = input[index];

    while (instruction !== "Decode") {
        let commandTokens = instruction.split("|");
        let command = commandTokens[0];

        switch (command) {
            case "Move":
                let lettersCount = Number(commandTokens[1]);
                let fragment = message.substring(0, lettersCount);
                message = message.replace(fragment, "") + fragment;
                break;

            case "Insert":
                let idx = Number(commandTokens[1]);
                let value = commandTokens[2];
                let firstPart = message.substring(0, idx);
                let lastPart = message.substring(idx);
                message = firstPart + value + lastPart;
                break;

            case "ChangeAll":
                let oldSubstring = commandTokens[1];
                let newSubstring = commandTokens[2];

                if (message.includes(oldSubstring)) {

                    while (message.includes(oldSubstring)) {
                        message = message.replace(oldSubstring, newSubstring);
                    }
                }
                break;
        }

        index++;
        instruction = input[index];
    }

    console.log(`The decrypted message is: ${message}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);