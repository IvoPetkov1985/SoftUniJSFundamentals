function modernTimes(text) {
    let wordsArray = text.split(" ");
    let hashWords = wordsArray.filter(w => w.startsWith("#") && w.length > 1);

    for (let word of hashWords) {
        word = word.slice(1);
        let isValid = true;

        for (let char of word) {
            if (!/[A-Za-z]/.test(char)) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            console.log(word);
        }
    }
}

//modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
//modernTimes("The symbol # is known #variously in English-speaking #regions as the #number sign'");

console.log("a".toUpperCase());

function modernTimes2(text) {
    let wordsArray = text.split(" ");
    let hashWords = wordsArray.filter(w => w.startsWith("#") && w.length > 1);

    for (let word of hashWords) {
        word = word.slice(1);
        let isValid = true;

        for (let char of word) {
            if (isCharLetter(char) === false) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            console.log(word);
        }        
    }

    function isCharLetter(char) {
        return char.toLowerCase() !== char.toUpperCase();
    }
}

modernTimes2("Nowadays everyone uses # to tag a #special word in #socialMedia");
modernTimes2("The symbol # is known #variously in English-speaking #regions as the #number sign'");