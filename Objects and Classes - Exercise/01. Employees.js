function employees(array) {
    let employeesList = [];

    for (let employeeName of array) {
        let emplObj = {};
        emplObj.name = employeeName;
        emplObj.persNumber = emplObj.name.length;
        employeesList.push(emplObj);
    }

    employeesList.forEach(e => console.log(`Name: ${e.name} -- Personal Number: ${e.persNumber}`));
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);

function employees2(arrayOfNames) {
    for (let names of arrayOfNames) {
        let employee = {
            name: names,
            personalNumber: names.length
        };

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}

employees2([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

employees2([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);