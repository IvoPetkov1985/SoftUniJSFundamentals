function inventory(inputArray) {
    let heroesCollection = [];

    for (let infoLine of inputArray) {
        let tokens = infoLine.split(" / ");
        let heroName = tokens.shift();
        let heroLevel = Number(tokens.shift());
        let heroItems = tokens;

        let heroObject = { Hero: heroName, level: heroLevel, items: heroItems };

        if (heroObject.items.length > 0) {
            heroesCollection.push(heroObject);
        }
    }

    heroesCollection.sort((a, b) => a.level - b.level);

    for (let hero of heroesCollection) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);