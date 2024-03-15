function addAndSubtract(firstNum, secondNum, thirdNum) {

    let result = subtract(add(firstNum, secondNum), thirdNum);
    resultPrint(result);

    function add(x, y) {
        return x + y;
    }

    function subtract(sum, z) {
        return sum - z;
    }

    function resultPrint(value) {
        console.log(value);
    }
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);

function addAndSubtr(firstNum, secondNum, thirdNum) {
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const print = x => console.log(x);

    let finalResult = subtract(add(firstNum, secondNum), thirdNum);
    print(finalResult);
}

addAndSubtr(23, 6, 10);
addAndSubtr(1, 17, 30);
addAndSubtr(42, 58, 100);