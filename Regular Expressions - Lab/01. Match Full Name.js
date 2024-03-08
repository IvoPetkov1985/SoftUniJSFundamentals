function matchFullName(inputText) {
    let pattern = /\b[A-Z][a-z]+\ [A-Z][a-z]+\b/gm;

    let validNames = [];

    let validName = null;
    validName = pattern.exec(inputText);

    while (validName !== null) {
        validNames.push(validName[0]);
        validName = pattern.exec(inputText);
    }

    let result = validNames.join(" ");
    console.log(result);
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");

function matchFullName2(inputText) {
    let pattern = RegExp(/\b[A-Z][a-z]+\ [A-Z][a-z]+\b/gm);

    let resultArray = inputText.match(pattern);

    console.log(resultArray.join(" "));
}

matchFullName2("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");