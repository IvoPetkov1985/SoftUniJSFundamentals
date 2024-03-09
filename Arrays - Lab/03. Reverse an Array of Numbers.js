function reverseAnArray(count, array) {
    let newArray = [];

    for (let i = 0; i < count; i++) {
        newArray[i] = array[i];
    }

    let reversedArray = [];

    for (let i = 0; i < newArray.length; i++) {
        let j = newArray.length - 1 - i;
        reversedArray[i] = newArray[j];
    }

    let result = reversedArray.join(" ");
    console.log(result);
}

reverseAnArray(3, [10, 20, 30, 40, 50]);
reverseAnArray(4, [-1, 20, 99, 5]);
reverseAnArray(2, [66, 43, 75, 89, 47]);