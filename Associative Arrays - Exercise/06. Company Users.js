function companyUsers(inputArray) {
    let companies = {};

    for (let line of inputArray) {
        let [company, user] = line.split(" -> ");

        if (!companies.hasOwnProperty(company)) {
            companies[company] = new Set();
        }

        companies[company].add(user);
    }


    for (let kvp of Object.entries(companies)
        .sort((a, b) => a[0].localeCompare(b[0]))) {
        let companyName = kvp[0];
        let users = kvp[1];
        console.log(companyName);

        users.forEach(user => {
            console.log(`-- ${user}`);
        });
    }
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