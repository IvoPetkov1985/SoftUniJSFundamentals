function signCheck(firstNum, secondNum, thirdNum) {
    let result = 0;

    result = secondMultiply(firstMultiply(firstNum, secondNum), thirdNum);

    print(checker(result));

    function firstMultiply(num1, num2) {
        return num1 * num2;
    }

    function secondMultiply(product, num3) {
        return product * num3;
    }

    function checker(num) {
        if (num >= 0) {
            return "Positive";
        } else {
            return "Negative";
        }
    }

    function print(value) {
        console.log(value);
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);