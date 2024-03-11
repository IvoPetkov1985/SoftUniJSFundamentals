function maxSequence(array) {
    let maxSeqArray = [];

    for (let i = 0; i < array.length; i++) {
        let currElement = array[i];
        let currArray = [currElement];

        for (let j = i + 1; j < array.length; j++) {
            let comparedElement = array[j];

            if (comparedElement === currElement) {
                currArray.push(comparedElement);
            } else {
                break;
            }
        }

        if (currArray.length > maxSeqArray.length) {
            maxSeqArray = currArray;
        }
    }

    let result = maxSeqArray.join(" ");
    console.log(result);
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);