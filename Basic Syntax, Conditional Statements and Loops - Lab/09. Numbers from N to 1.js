function numbersFromNTo1(biggestNum) {
    let num = Number(biggestNum);

    for (let i = num; i >= 1; i--) {
        console.log(i);
    }
}

numbersFromNTo1(5);
numbersFromNTo1(10);

function numbersFromNTo1While(inputNumber) {
    let number = Number(inputNumber);

    while (number > 0) {
        console.log(number);
        number--;
    }
}

numbersFromNTo1While(3);
numbersFromNTo1While(7);
numbersFromNTo1While(17);