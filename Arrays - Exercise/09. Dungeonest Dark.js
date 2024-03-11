function dungeonestDark(inputArray) {
    let inputString = inputArray[0];
    let allDungeons = inputString.split("|");

    let health = 100;
    let coins = 0;

    let dungeonsCount = 1;

    for (let dungeon of allDungeons) {
        let dungeonTokens = dungeon.split(" ");
        let text = dungeonTokens[0];
        let value = Number(dungeonTokens[1]);

        if (text === "potion") {
            let hpAdded = health + value <= 100 ? value : 100 - health;
            health += hpAdded;
            console.log(`You healed for ${hpAdded} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (text === "chest") {
            coins += value;
            console.log(`You found ${value} coins.`);
        } else {
            health -= value;

            if (health > 0) {
                console.log(`You slayed ${text}.`);
            } else {
                console.log(`You died! Killed by ${text}.`);
                console.log(`Best room: ${dungeonsCount}`);
                break;
            }
        }

        dungeonsCount++;
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);