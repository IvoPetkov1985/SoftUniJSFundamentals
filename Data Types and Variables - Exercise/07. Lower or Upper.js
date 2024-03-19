function lowerOrUpper(char) {
    const firstUpperCase = 65;
    const lastUpperCase = 90;
    const firstLowerCase = 97;
    const lastLowerCase = 122;

    if (char.charCodeAt(0) >= firstLowerCase && char.charCodeAt(0) <= lastLowerCase) {
        console.log("lower-case");
    } else if (char.charCodeAt(0) >= firstUpperCase && char.charCodeAt(0) < lastUpperCase) {
        console.log("upper-case");
    }
}

lowerOrUpper("L");
lowerOrUpper("f");