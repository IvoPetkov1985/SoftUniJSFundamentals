function shoppingList(input) {
    let list = input.shift().split("!");

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Go Shopping!") {
        let tokens = commandLine.split(" ");
        let command = tokens[0];
        let item = tokens[1];

        if (command === "Urgent") {
            if (!list.includes(item)) {
                list.unshift(item);
            }
        } else if (command === "Unnecessary") {
            let itemIndex = list.indexOf(item);

            if (itemIndex > -1) {
                list.splice(itemIndex, 1);
            }
        } else if (command === "Correct") {
            let oldItemIndex = list.indexOf(item);

            if (oldItemIndex > -1) {
                let newItem = tokens[2];
                list.splice(oldItemIndex, 1, newItem);
            }
        } else if (command === "Rearrange") {
            let itemIndex = list.indexOf(item);

            if (itemIndex > -1) {
                let itemToRearrange = list.splice(itemIndex, 1);
                list.push(itemToRearrange);
            }
        }

        index++;
        commandLine = input[index];
    }

    console.log(list.join(", "));
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]
);

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]
);