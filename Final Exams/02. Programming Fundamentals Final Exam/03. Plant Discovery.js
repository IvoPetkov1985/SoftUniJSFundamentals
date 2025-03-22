function plantDiscovery(input) {
    let plantsCount = Number(input.shift());
    let allPlants = [];

    for (let i = 0; i < plantsCount; i++) {
        let plantInfoLine = input.shift();
        let plantTokens = plantInfoLine.split("<->");
        let plantName = plantTokens[0];
        let plantRarity = Number(plantTokens[1]);

        let plant = allPlants.find(p => p.name === plantName);

        if (!plant) {
            let plantObj = {
                name: plantName,
                rarity: plantRarity,
                ratings: []
            }
            allPlants.push(plantObj);
        } else {
            plant.rarity = plantRarity;
        }
    }

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Exhibition") {
        let tokens = commandLine.split(": ");
        let command = tokens[0];

        if (command === "Rate") {
            let rateTokens = tokens[1].split(" - ");
            let name = rateTokens[0];
            let value = Number(rateTokens[1]);

            let selectedPlant = getSelectedPlant(name);

            if (!!selectedPlant) {
                selectedPlant.ratings.push(value);
            } else {
                console.log("error");
            }
        } else if (command === "Update") {
            let updateTokens = tokens[1].split(" - ");
            let name = updateTokens[0];
            let newRarity = Number(updateTokens[1]);

            let selectedPlant = getSelectedPlant(name);

            if (!!selectedPlant) {
                selectedPlant.rarity = newRarity;
            } else {
                console.log("error");
            }
        } else if (command === "Reset") {
            let name = tokens[1];

            let selectedPlant = getSelectedPlant(name);

            if (!!selectedPlant) {
                selectedPlant.ratings = [];
            } else {
                console.log("error");
            }
        }

        index++;
        commandLine = input[index];
    }

    console.log("Plants for the exhibition:");

    allPlants.forEach(plant => {
        let rating = 0;

        if (plant.ratings.length > 0) {
            rating = plant.ratings.reduce((acc, x) => acc + x / plant.ratings.length, 0);
        }
        console.log(`- ${plant.name}; Rarity: ${plant.rarity}; Rating: ${rating.toFixed(2)}`);
    });

    function getSelectedPlant(plantName) {
        return allPlants.find(p => p.name === plantName);
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]
);

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]
);