function arrayRotation(inputArray, rotations) {
    for (let i = 0; i < rotations % inputArray.length; i++) {
        let initialElement = inputArray.shift();
        inputArray.push(initialElement);
    }

    let result = inputArray.join(" ");
    console.log(result);
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);