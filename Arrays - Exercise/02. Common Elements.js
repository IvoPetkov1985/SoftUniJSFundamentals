function commonElements(array1, array2) {
    for (let element of array1) {

        if (array2.includes(element)) {
            console.log(element);
        }
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);

commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);

function commons(arr1, arr2) {
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;

    for (let i = 0; i < arr1Length; i++) {
        for (let j = 0; j < arr2Length; j++) {
            if (arr2[j] === arr1[i]) {
                console.log(arr1[i]);
            }
        }
    }
}

commons(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);

commons(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);