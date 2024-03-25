function convertToJson(name, lastName, hairColor) {
    let myObject = {
        name,
        lastName,
        hairColor
    };

    let resultString = JSON.stringify(myObject);
    console.log(resultString);
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');

function convertorToJson(firstName, lastName, hairColor) {
    let myObject = {};
    myObject.name = firstName;
    myObject.lastName = lastName;
    myObject.hairColor = hairColor;

    let resultString = JSON.stringify(myObject);
    console.log(resultString);
}

convertorToJson('George', 'Jones', 'Brown');
convertorToJson('Peter', 'Smith', 'Blond');