function magicSum(array, magicNum) {
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let firstNum = array[i];

        for (let j = i + 1; j < arrayLength; j++) {
            let secondNum = array[j];

            if (firstNum + secondNum === magicNum) {
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);