function pirates(input) {
    let cities = [];

    let index = 0;
    let cityCommand = input[index];

    while (cityCommand !== "Sail") {
        let tokens = cityCommand.split("||");
        let name = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        let city = cities.find(c => c.name === name);

        if (!!city) {
            city.population += population;
            city.gold += gold;
        } else {
            city = { name, population, gold };
            cities.push(city);
        }

        index++;
        cityCommand = input[index];
    }

    let eventCommand = input[++index];

    while (eventCommand !== "End") {
        let tokens = eventCommand.split("=>");
        let command = tokens[0];
        let cityName = tokens[1];

        if (command === "Plunder") {
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);

            let attackedCity = cities.find(c => c.name === cityName);
            attackedCity.population -= people;
            attackedCity.gold -= gold;

            console.log(`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (attackedCity.gold === 0 || attackedCity.population === 0) {
                let cityIndex = cities.indexOf(attackedCity);
                cities.splice(cityIndex, 1);
                console.log(`${cityName} has been wiped off the map!`);
            }
        } else if (command === "Prosper") {
            let addedGold = Number(tokens[2]);

            if (addedGold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                let prosperedCity = cities.find(c => c.name === cityName);
                prosperedCity.gold += addedGold;
                console.log(`${addedGold} gold added to the city treasury. ${cityName} now has ${prosperedCity.gold} gold.`);
            }
        }

        index++;
        eventCommand = input[index];
    }

    if (cities.length > 0) {
        console.log(`Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`);

        for (let city of cities) {
            console.log(`${city.name} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]
);

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]
);