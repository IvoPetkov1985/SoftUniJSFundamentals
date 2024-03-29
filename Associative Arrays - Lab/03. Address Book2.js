function addressBook(inputArray) {
    let addresses = {};

    for (let line of inputArray) {
        let [name, address] = line.split(":");
        addresses[name] = address;
    }

    let sortedKeys = Object.keys(addresses).sort((a, b) => a.localeCompare(b));

    let addressesMap = new Map();

    for (let key of sortedKeys) {
        addressesMap.set(key, addresses[key]);
    }

    for (let kvp of addressesMap) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);