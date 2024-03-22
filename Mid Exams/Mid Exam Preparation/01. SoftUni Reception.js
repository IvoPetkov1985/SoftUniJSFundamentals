function softuniReception(input) {
    let employeeOne = Number(input.shift());
    let employeeTwo = Number(input.shift());
    let employeeThree = Number(input.shift());
    let studentsWaiting = Number(input.shift());
    let staffCapacity = employeeOne + employeeTwo + employeeThree;

    let hoursCount = 0;

    while (studentsWaiting > 0) {
        hoursCount++;
        studentsWaiting -= staffCapacity;

        if (hoursCount % 4 === 0) {
            hoursCount++;
        }
    }

    console.log(`Time needed: ${hoursCount}h.`);
}

softuniReception(['5', '6', '4', '20']);
softuniReception(['1', '2', '3', '45']);
softuniReception(['3', '2', '5', '40']);