function oddOccurrences(inputString) {
    let wordsArray = inputString.split(" ").map(x => x.toLowerCase());

    let wordsObject = {};

    wordsArray.forEach(word => {
        if (!wordsObject.hasOwnProperty(word)) {
            wordsObject[word] = 1;
        } else {
            wordsObject[word]++;
        }
    });

    let filtered = Array.from(Object.entries(wordsObject))
        .filter(x => x[1] % 2 !== 0)
        .sort((a, b) => b[1] - a[1]);

    let result = "";

    filtered.forEach(element => {
        result += `${element[0]} `;
    });

    console.log(result.trimEnd());
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')