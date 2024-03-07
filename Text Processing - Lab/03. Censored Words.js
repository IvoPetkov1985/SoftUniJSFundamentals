function censoredWords(text, censoredWord) {
    
    while (text.includes(censoredWord)) {
        text = text.replace(censoredWord, "*".repeat(censoredWord.length));
    }

    console.log(text);
}

censoredWords("A small sentence with some words", "small");
censoredWords("Find the hidden word", "hidden");

function censored(text, word) {
    let newString = "*".repeat(word.length);

    while (text.indexOf(word) !== -1) {
        text = text.replace(word, newString);
    }

    console.log(text);
}

censored("A small sentence with some words", "small");
censored("Find the hidden word", "hidden");

function censoredShortVersion(text, word) {
    let censoredString = "*".repeat(word.length);
    text = text.split(word).join(censoredString);
    console.log(text);
}

censoredShortVersion("A small sentence with some words", "small");
censoredShortVersion("Find the hidden word", "hidden");