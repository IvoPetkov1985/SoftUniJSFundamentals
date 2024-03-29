function addressBook(inputArray) {
    let book = {};

    for (let line of inputArray) {
        let [name, address] = line.split(":");
        book[name] = address;
    }

    let names = Object.keys(book);
    let sortedNames = names.sort((a, b) => a.localeCompare(b));

    for (let name of sortedNames) {
        console.log(`${name} -> ${book[name]}`);
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