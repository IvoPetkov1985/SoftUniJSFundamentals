function substringFinder(text, start, count) {
    
    let newString = text.substring(start, start + count);
    console.log(newString);
}

substringFinder("ASentence", 1, 8);
substringFinder("SkipWord", 4, 7);