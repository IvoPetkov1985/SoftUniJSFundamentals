function rotateArray(array) {
    const rotations = array.pop();
    const arrayLength = array.length;

    for (let i = 0; i < rotations % arrayLength; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    let resultString = array.join(" ");
    console.log(resultString);
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);