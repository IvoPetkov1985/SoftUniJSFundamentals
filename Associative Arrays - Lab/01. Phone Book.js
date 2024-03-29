function phoneBook(inputArray) {
    let book = {};

    for (let line of inputArray) {
        let [name, phoneNumber] = line.split(" ");
        book[name] = phoneNumber;
    }

    for (let kvp of Object.entries(book)) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);