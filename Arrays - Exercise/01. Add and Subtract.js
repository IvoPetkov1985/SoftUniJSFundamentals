function addAndSubtract(inputArray) {
    const arrayLength = inputArray.length;
    let originalSum = 0;
    let newSum = 0;

    for (let i = 0; i < arrayLength; i++) {
        originalSum += inputArray[i];

        if (inputArray[i] % 2 === 0) {
            inputArray[i] += i;
        } else {
            inputArray[i] -= i;
        }

        newSum += inputArray[i];
    }

    console.log(inputArray);
    console.log(originalSum);
    console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);