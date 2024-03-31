function wordTracker(inputArray) {
    let searchedWords = inputArray.shift().split(" ");

    let occurrences = {};

    for (let word of searchedWords) {
        occurrences[word] = 0;
    }

    for (let word of inputArray) {
        if (occurrences.hasOwnProperty(word)) {
            occurrences[word]++;
        }
    }

    let sorted = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);

    sorted.forEach(kvp => {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    });
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);