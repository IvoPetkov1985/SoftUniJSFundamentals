function replaceRepeatingChars(inputString) {
    let resultString = "";
    let previousChar = "";

    for (const char of inputString) {
        if (char !== previousChar) {
            resultString += char;
            previousChar = char;
        }
    }

    console.log(resultString);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
replaceRepeatingChars("qqqwerqwecccwd");