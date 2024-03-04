function printCharacters(text) {

    for (const char of text) {
        console.log(char);
    }
}

printCharacters("AWord");
printCharacters("Sentence");

function printCharacters2(inputText) {
    
    for (let i = 0; i < inputText.length; i++) {
        console.log(inputText.charAt(i));
    }
}

printCharacters2("AWord2");
printCharacters2("Sentence2");