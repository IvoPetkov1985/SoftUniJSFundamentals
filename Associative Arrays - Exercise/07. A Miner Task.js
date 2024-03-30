function aMinerTask(inputArray) {
    let metals = new Map();
    const arrayLength = inputArray.length;

    for (let i = 0; i < arrayLength; i += 2) {
        let currentMetal = inputArray[i];
        let quantity = Number(inputArray[i + 1]);

        if (!metals.has(currentMetal)) {
            metals.set(currentMetal, 0);
        }

        let oldValue = metals.get(currentMetal);
        let newValue = oldValue + quantity;
        metals.set(currentMetal, newValue);
    }

    for (let resource of metals) {
        let [metal, quantity] = resource;
        console.log(`${metal} -> ${quantity}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);