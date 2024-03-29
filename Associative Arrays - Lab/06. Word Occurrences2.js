function wordOccurrences(arrayOfWords) {
    let wordsObj = {};

    for (let word of arrayOfWords) {
        if (!wordsObj.hasOwnProperty(word)) {
            wordsObj[word] = 1;
        } else {
            let currentCount = wordsObj[word];
            currentCount++;
            wordsObj[word] = currentCount;
        }
    }

    let sorted = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);

    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);