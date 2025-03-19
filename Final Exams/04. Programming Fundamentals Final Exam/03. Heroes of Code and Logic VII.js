function heroesOfCode(input) {
    let heroesCount = Number(input.shift());

    let allHeroes = [];

    for (let i = 0; i < heroesCount; i++) {
        let currentLine = input.shift();
        let heroTokens = currentLine.split(" ");
        let heroName = heroTokens[0];
        let hitPoints = Number(heroTokens[1]);
        let manaPoints = Number(heroTokens[2]);
        let heroObj = { heroName, hitPoints, manaPoints };
        allHeroes.push(heroObj);
    }

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "End") {
        let commandTokens = commandLine.split(" - ");
        let action = commandTokens[0];
        let name = commandTokens[1];
        let selectedHero = allHeroes.find(h => h.heroName === name);

        if (action === "CastSpell") {
            let manaPointsNeeded = Number(commandTokens[2]);
            let spellName = commandTokens[3];

            if (selectedHero.manaPoints >= manaPointsNeeded) {
                selectedHero.manaPoints -= manaPointsNeeded;
                console.log(`${selectedHero.heroName} has successfully cast ${spellName} and now has ${selectedHero.manaPoints} MP!`);
            } else {
                console.log(`${selectedHero.heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (action === "TakeDamage") {
            let damage = Number(commandTokens[2]);
            let attacker = commandTokens[3];

            selectedHero.hitPoints -= damage;

            if (selectedHero.hitPoints > 0) {
                console.log(`${selectedHero.heroName} was hit for ${damage} HP by ${attacker} and now has ${selectedHero.hitPoints} HP left!`);
            } else {
                console.log(`${selectedHero.heroName} has been killed by ${attacker}!`);
                let heroIndex = allHeroes.indexOf(selectedHero);
                allHeroes.splice(heroIndex, 1);
            }
        } else if (action === "Recharge") {
            let amount = Number(commandTokens[2]);
            let oldManaPoints = selectedHero.manaPoints;
            selectedHero.manaPoints += amount;
            let diff = 0;

            if (selectedHero.manaPoints > 200) {
                selectedHero.manaPoints = 200;
                diff = 200 - oldManaPoints;
            } else {
                diff = amount;
            }

            console.log(`${selectedHero.heroName} recharged for ${diff} MP!`);
        } else if (action === "Heal") {
            let amount = Number(commandTokens[2]);
            let oldHitPoints = selectedHero.hitPoints;
            selectedHero.hitPoints += amount;
            let diff = 0;

            if (selectedHero.hitPoints > 100) {
                selectedHero.hitPoints = 100;
                diff = 100 - oldHitPoints;
            } else {
                diff = amount;
            }

            console.log(`${selectedHero.heroName} healed for ${diff} HP!`);
        }

        index++;
        commandLine = input[index];
    }

    allHeroes.forEach(hero => {
        console.log(hero.heroName);
        console.log(`  HP: ${hero.hitPoints}`);
        console.log(`  MP: ${hero.manaPoints}`);
    });
}

heroesOfCode([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);

heroesOfCode([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);