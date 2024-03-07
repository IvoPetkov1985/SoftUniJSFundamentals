function stringSubstring(word, text) {
    let textAsArray = text.split(" ");
    
    let isFound = false;

    for (let str of textAsArray) {
        if (word === str.toLowerCase()) {
            isFound = true;
            break;
        }
    }

    if (isFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");