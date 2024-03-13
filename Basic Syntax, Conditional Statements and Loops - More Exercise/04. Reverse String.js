function reverseString(inputString) {
    const stringLength = inputString.length;
    let revesedString = "";

    for (let i = 0; i < stringLength; i++) {
        let currentChar = inputString[stringLength - 1 - i];
        revesedString += currentChar;
    }

    console.log(revesedString);
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");

function reverseText(inputString) {
    console.log(inputString.split("").reverse().join(""));
}

reverseText("SoftUni");
reverseText("Hello");
reverseText("1234");