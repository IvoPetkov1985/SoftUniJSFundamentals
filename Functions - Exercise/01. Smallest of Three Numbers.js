function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    let smallest = Math.min(firstNum, secondNum, thirdNum);
    console.log(smallest);
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);

function smallestNum(firstNum, secondNum, thirdNum) {

    let searchedNum = getSmallest(firstNum, secondNum, thirdNum);
    console.log(searchedNum);

    function getSmallest(x, y, z) {
        let smallest = Number.MAX_SAFE_INTEGER;

        let numbers = [x, y, z];

        for (let number of numbers) {
            if (number < smallest) {
                smallest = number;
            }
        }

        return smallest;
    }
}

smallestNum(2, 5, 3);
smallestNum(600, 342, 123);
smallestNum(25, 21, 4);
smallestNum(2, 2, 2);