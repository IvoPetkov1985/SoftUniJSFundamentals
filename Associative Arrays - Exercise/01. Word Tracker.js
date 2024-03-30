function wordTracker(inputArray) {
    let searchedWords = inputArray.shift().split(" ");

    let occurrences = new Map();

    for (let word of searchedWords) {
        occurrences.set(word, 0);
    }

    for (let word of inputArray) {
        if (searchedWords.includes(word)) {
            let currentNum = occurrences.get(word);
            let incrementedNum = currentNum + 1;
            occurrences.set(word, incrementedNum);
        }
    }

    let sorted = Array.from(occurrences).sort((a, b) => b[1] - a[1]);

    for (let kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}

wordTracker([

    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);