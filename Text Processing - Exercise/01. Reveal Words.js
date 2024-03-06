function revealWords(words, text) {

    let wordsAsArray = words.split(", ");

    for (let word of wordsAsArray) {
        let templateString = "*".repeat(word.length);
        text = text.replace(templateString, word);
    }

    console.log(text);
}

revealWords("great", "softuni is ***** place for learning new programming languages");
revealWords("great, learning", "softuni is ***** place for ******** new programming languages");