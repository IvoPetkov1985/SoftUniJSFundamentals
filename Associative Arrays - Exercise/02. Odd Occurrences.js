function wordOccurrences(input) {
    let inputAsArray = input.split(" ").map(x => x.toLowerCase());
    
    let occurrences = new Map();

    for (let word of inputAsArray) {
        if (!occurrences.has(word)) {
            occurrences.set(word, 1);
        } else {
            let currentCount = occurrences.get(word);
            let newCount = currentCount + 1;
            occurrences.set(word, newCount);
        }
    }

    let sortedOccurrences = Array.from(occurrences).filter(x => x[1] % 2 === 1).sort((a, b) => b[1] = a[1]);
    let resultString = "";

    for (let kvp of sortedOccurrences) {
        resultString += `${kvp[0]} `;
    }

    console.log(resultString);
}

wordOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
wordOccurrences('Cake IS SWEET is Soft CAKE sweet Food');