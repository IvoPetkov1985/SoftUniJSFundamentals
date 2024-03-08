function numbersFromMToN(biggerNum, smallerNum) {
    let current = Number(biggerNum);
    let smaller = Number(smallerNum);

    while (current >= smaller) {
        console.log(current);
        current--;
    }
}

numbersFromMToN(6, 2);
numbersFromMToN(4, 1);

function numbersFromBiggerToSmaller(firstNum, secondNum) {
    for (let i = firstNum; i >= secondNum; i--) {
        console.log(i);
    }
}

numbersFromBiggerToSmaller(5, 1);
numbersFromBiggerToSmaller(15, 5);