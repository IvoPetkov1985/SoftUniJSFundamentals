function wordOccurrences(inputArray) {
    let wordsCounter = new Map();

    for (let word of inputArray) {
        if (!wordsCounter.has(word)) {
            wordsCounter.set(word, 1);
        } else {
            let currentCount = wordsCounter.get(word);
            wordsCounter.set(word, currentCount + 1);
        }
    }

    let sortedWords = Array.from(wordsCounter).sort((a, b) => b[1] - a[1]);

    for (let kvp of sortedWords) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);