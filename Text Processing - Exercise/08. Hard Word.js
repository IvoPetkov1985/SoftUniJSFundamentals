function hardWord(inputArray) {
    [letter, hardWords] = inputArray;

    let letterAsStringArr = letter.split(" ");
    let blanksArr = letterAsStringArr.filter(w => w.startsWith("_"));

    for (let blank of blanksArr) {
        if (!blank.endsWith("_")) {
            blank = blank.slice(0, blank.length - 1);
        }

        let properWord = hardWords.find(w => w.length === blank.length);

        letter = letter.replace(blank, properWord);
    }

    console.log(letter);
}

//hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
//['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);

function hardWords2(inputArray) {
    let letter = inputArray[0];
    let words = inputArray[1];

    let letterAsStrings = letter.split(" ");
    let filteredBlanks = letterAsStrings.filter(w => w.includes("_"));

    for (let blankWord of filteredBlanks) {
        if (!blankWord.endsWith("_")) {
            blankWord = blankWord.substring(0, blankWord.length - 1);
        }

        let missingWord = words.find(w => w.length === blankWord.length);
        letter = letter.replace(blankWord, missingWord);
    }

    console.log(letter);
}

hardWords2(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);