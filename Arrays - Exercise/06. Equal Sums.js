function equalSums(array) {
    const arrayLength = array.length;
    let index = 0;
    let isFound = false;

    for (let i = 0; i < arrayLength; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }

        for (let j = i + 1; j < arrayLength; j++) {
            rightSum += array[j];
        }

        if (leftSum === rightSum) {
            index = i;
            isFound = true;
            break;
        }
    }

    if (arrayLength === 1) {
        console.log(0);
    } else if (isFound) {
        console.log(index);
    } else {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);