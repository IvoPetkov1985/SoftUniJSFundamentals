function repeatString(str, count) {
    let finalString = "";

    for (let i = 0; i < count; i++) {
        finalString = concatenate(finalString, str);
    }

    print(finalString);

    function concatenate(firstString, secondString) {
        return firstString + secondString;
    }

    function print(value) {
        console.log(value);
    }
}

repeatString("abc", 3);
repeatString("String", 2);