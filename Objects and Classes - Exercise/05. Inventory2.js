function inventory(arrayOfStrings) {
    let register = [];

    for (let line of arrayOfStrings) {
        let [heroName, heroLevel, items] = line.split(" / ");

        let heroObject = {
            name: heroName,
            level: Number(heroLevel),
            items: items
        };

        register.push(heroObject);
    }

    register.sort((a, b) => a.level - b.level);

    for (let obj of register) {
        console.log(`Hero: ${obj.name}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items}`);
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