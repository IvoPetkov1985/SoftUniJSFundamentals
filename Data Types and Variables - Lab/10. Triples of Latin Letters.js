function triplesOfLatinLetters(numAsString) {
    const castedNum = Number(numAsString);
    const startingLetterRepr = 97;

    for (let i = 0; i < castedNum; i++) {
        let firstLetter = String.fromCharCode(startingLetterRepr + i);

        for (let j = 0; j < castedNum; j++) {
            let secondLetter = String.fromCharCode(startingLetterRepr + j);

            for (let k = 0; k < castedNum; k++) {
                let thirdLetter = String.fromCharCode(startingLetterRepr + k);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

triplesOfLatinLetters('3');
triplesOfLatinLetters('2');