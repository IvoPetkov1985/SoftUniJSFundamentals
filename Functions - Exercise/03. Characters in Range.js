function charsInRange(firstChar, secondChar) {
    let firstAsciiCode = firstChar.charCodeAt(0);
    let secondAsciiCode = secondChar.charCodeAt(0);

    let firstCode = Math.min(firstAsciiCode, secondAsciiCode);
    let lastCode = Math.max(firstAsciiCode, secondAsciiCode);

    let resultString = "";

    for (let i = firstCode + 1; i < lastCode; i++) {
        let currChar = String.fromCharCode(i);
        resultString += currChar + " ";
    }

    console.log((resultString));
}

charsInRange("a", "d");
charsInRange('#', ':');
charsInRange('C', '#');

function charactersInRange(firstChar, secondChar) {
    let firstAsciiCode = charCodeFinder(firstChar);
    let secondAsciiCode = charCodeFinder(secondChar);

    let firstCode = Math.min(firstAsciiCode, secondAsciiCode);
    let secondCode = Math.max(firstAsciiCode, secondAsciiCode);

    let resultArray = [];

    for (let i = firstCode + 1; i < secondCode; i++) {
        let charToAdd = String.fromCharCode(i);
        resultArray.push(charToAdd);
    }

    let resultString = resultArray.join(" ");
    print(resultString);

    function print(str) {
        console.log(str);
    }

    function charCodeFinder(char) {
        return char.charCodeAt(0);
    }
}   

charactersInRange("a", "d");
charactersInRange('#', ':');
charactersInRange('C', '#');