function inventory(input) {
    let collection = input.shift().split(", ");

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Craft!") {
        let tokens = commandLine.split(" - ");
        let command = tokens[0];
        let item = tokens[1];

        if (command === "Collect") {
            if (!collection.includes(item)) {
                collection.push(item);
            }
        } else if (command === "Drop") {
            let indexOfItemToDrop = collection.indexOf(item);

            if (indexOfItemToDrop > -1) {
                collection.splice(indexOfItemToDrop, 1);
            }
        } else if (command === "Combine Items") {
            let [oldItem, newItem] = item.split(":");

            let oldItemIndex = collection.indexOf(oldItem);

            if (oldItemIndex > -1) {
                collection.splice(oldItemIndex + 1, 0, newItem);
            }
        } else if (command === "Renew") {
            let itemToRenewIndex = collection.indexOf(item);

            if (itemToRenewIndex > -1) {
                collection.splice(itemToRenewIndex, 1);
                collection.push(item);
            }
        }

        index++;
        commandLine = input[index];
    }

    console.log(collection.join(", "));
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);