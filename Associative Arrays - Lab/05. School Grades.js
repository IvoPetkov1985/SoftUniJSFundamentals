function schoolGrades(inputArray) {
    let students = {};

    for (let line of inputArray) {
        let dataTokens = line.split(" ");
        let studentName = dataTokens.shift();
        let studentGrades = dataTokens.map(x => Number(x));

        if (!students.hasOwnProperty(studentName)) {
            students[studentName] = studentGrades;
        } else {
            students[studentName].push(...studentGrades);
        }
    }

    let studentKeys = Object.keys(students);
    studentKeys.sort((a, b) => a.localeCompare(b));

    for (let name of studentKeys) {
        let sumGrades = students[name].reduce((a, b) => {
            return a + b;
        }, 0);

        let average = (sumGrades / students[name].length).toFixed(2);

        console.log(`${name}: ${average}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
);