function concatenateNames(firstName, lastName, delimiter) {
    let resultString = firstName + delimiter + lastName;
    console.log(resultString);
}

concatenateNames('John', 'Smith', '->');
concatenateNames('Jan', 'White', '<->');
concatenateNames('Linda', 'Terry', '=>');