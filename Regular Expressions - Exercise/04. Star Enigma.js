function starEnigma(input) {
    let countMessages = Number(input.shift());
    let pattern = /[star]/gi;
    let convertedMessages = [];

    for (let i = 0; i < countMessages; i++) {
        let currentMsg = input[i];
        let symbolCounter = 0;

        let currentMatch = currentMsg.match(pattern);

        if (currentMatch) {
            symbolCounter = currentMatch.length;
        }

        let newMessage = "";

        for (let symbol of currentMsg) {
            let charCode = symbol.charCodeAt(0);
            charCode -= symbolCounter;
            let convertedSymbol = String.fromCharCode(charCode);
            newMessage += convertedSymbol;
        }

        convertedMessages.push(newMessage);
    }

    let planetInfoPattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*\->(?<soldiersCount>\d+)/;

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let message of convertedMessages) {
        let msgMatch = message.match(planetInfoPattern);

        if (msgMatch) {
            let attackType = msgMatch.groups.type;
            let planet = msgMatch.groups.planetName;

            if (attackType === "A") {
                attackedPlanets.push(planet);
            } else if (attackType === "D") {
                destroyedPlanets.push(planet);
            }
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    attackedPlanets.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
);

starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
);