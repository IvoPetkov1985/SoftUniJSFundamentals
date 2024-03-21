function gladiatorInventory(input) {
    let inventory = input.shift().split(" ");

    for (let line of input) {
        let tokens = line.split(" ");
        let command = tokens[0];
        let equipment = tokens[1];

        switch (command) {
            case "Buy":
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case "Trash":
                let index = inventory.indexOf(equipment);

                if (index > -1) {
                    inventory.splice(index, 1);
                }
                break;
            case "Repair":
                let indexOfElementToRepair = inventory.indexOf(equipment);

                if (indexOfElementToRepair > -1) {
                    let repairingElement = inventory.splice(indexOfElementToRepair, 1)[0];
                    inventory.push(repairingElement);
                }
                break;
            case "Upgrade":
                let upgradeTokens = equipment.split("-");
                let equipmentName = upgradeTokens[0];

                let indexOfUpgradedElement = inventory.indexOf(equipmentName);

                if (indexOfUpgradedElement > -1) {
                    let elementToAdd = upgradeTokens.join(":");
                    inventory.splice(indexOfUpgradedElement + 1, 0, elementToAdd);
                }
                break;
        }
    }

    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);