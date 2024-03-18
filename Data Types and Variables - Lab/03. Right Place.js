function rightPlace(stringWithBlank, char, str) {
    let resultString = stringWithBlank.replace("_", char);
    
    if (resultString === str) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');