function sumFirstAndLastElement(array) {
    let firstElement = array[0];
    let lastElement = array[array.length - 1];
    let result = firstElement + lastElement;
    console.log(result);
}

sumFirstAndLastElement([20, 30, 40]);
sumFirstAndLastElement([10, 17, 22, 33]);
sumFirstAndLastElement([11, 58, 69]);