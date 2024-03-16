function perfectNumber(number) {
    let sumDivisors = 0;

    for (let i = 1; i <= number / 2; i++) {

        if (number % i === 0) {
            sumDivisors += i;
        }
    }

    if (sumDivisors === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

// perfectNumber(6);
// perfectNumber(28);
// perfectNumber(1236498);

function perfectNum(num) {
    const inputNumber = Number(num);

    if (perfectNumChecker(inputNumber)) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    function perfectNumChecker(number) {
        let sum = 0;

        for (let i = 1; i <= number / 2; i++) {

            if (number % i === 0) {
                sum += i;
            }
        }

        return sum === number;
    }
}

perfectNum(6);
perfectNum(28);
perfectNum(1236498);