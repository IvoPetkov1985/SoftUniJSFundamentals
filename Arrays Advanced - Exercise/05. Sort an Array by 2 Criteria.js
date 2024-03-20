function sortAnArrayBy2Criteria(inputArray) {
    let sorted = inputArray.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })

    sorted.forEach(element => {
        console.log(element);
    });
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);