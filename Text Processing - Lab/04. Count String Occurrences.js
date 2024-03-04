function wordOccurrences(text, word) {

    let textAsArray = text.split(" ");
    let counter = 0;

    for (let i = 0; i < textAsArray.length; i++) {

        if (textAsArray[i] === word) {
            counter++;
        }
    }

    console.log(counter);
}

wordOccurrences("This is a word and it also is a sentence", "is");
wordOccurrences("softuni is great place for learning new programming languages", "softuni");

function occurrences(string, searchedWord) {

    let textAsArr = string.split(" ");

    let counter = 0;

    for (const word of textAsArr) {

        if (word === searchedWord) {
            counter++;
        }
    }

    console.log(counter);
}

occurrences("This is a word and it also is a sentence", "is");
occurrences("softuni is great place for learning new programming languages", "softuni");