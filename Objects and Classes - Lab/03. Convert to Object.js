function convertToObject(jsonString) {
    let myObject = JSON.parse(jsonString);

    for (let kvp of Object.entries(myObject)) {
        let [key, value] = kvp;
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');

function convertorToObject(jsonString) {
    let myObj = JSON.parse(jsonString);

    for (let key of Object.keys(myObj)) {
        let currentValue = myObj[key];
        console.log(`${key}: ${currentValue}`);
    }
}

convertorToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertorToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');