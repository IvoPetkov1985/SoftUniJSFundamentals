function substringFinder(text, start, count) {
    let startPosition = Number(start);
    let countElements = Number(count);
    let endPosition = startPosition + countElements;
    let newString = text.substring(startPosition, endPosition);
    console.log(newString);
}

substringFinder("ASentence", 1, 8);
substringFinder("SkipWord", 4, 7);

function substrFinder(text, start, count) {
    let resultStr = text.substr(start, count);
    console.log(resultStr);
}

substrFinder("ASentence", 1, 8);
substrFinder("SkipWord", 4, 7);