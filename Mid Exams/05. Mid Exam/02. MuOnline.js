function muOnline(input) {
    let health = 100;
    let bitcoins = 0;

    let dungeons = input.split("|");
    let isAlive = true;
    let room = 0;

    for (let dungeon of dungeons) {
        let tokens = dungeon.split(" ");
        let command = tokens[0];
        let value = Number(tokens[1]);
        room++;

        if (command === "potion") {
            let healthAdded = 0;

            if (health + value <= 100) {
                healthAdded = value;
            } else {
                healthAdded = 100 - health;
            }

            health += healthAdded;
            console.log(`You healed for ${healthAdded} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === "chest") {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;

            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                isAlive = false;
                break;
            }
        }
    }

    if (isAlive) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");