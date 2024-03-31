function companyUsers(inputArray) {
    let allCompanies = {};

    for (let line of inputArray) {
        let tokens = line.split(" -> ");
        let comapanyName = tokens[0];
        let userName = tokens[1];

        if (!allCompanies.hasOwnProperty(comapanyName)) {
            allCompanies[comapanyName] = [];
        }

        if (!allCompanies[comapanyName].includes(userName)) {
            allCompanies[comapanyName].push(userName);
        }
    }

    let sorted = Array.from(Object.entries(allCompanies)).sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach(kvp => {
        let company = kvp[0];
        console.log(company);

        let users = kvp[1];
        users.forEach(user => {
            console.log(`-- ${user}`);
        });
    });
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);