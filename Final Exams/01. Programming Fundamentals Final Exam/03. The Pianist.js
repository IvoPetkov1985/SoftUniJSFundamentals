function pianist(input) {
    let piecesCount = Number(input.shift());
    let collection = [];

    for (let i = 0; i < piecesCount; i++) {
        let pieceLine = input.shift();
        let [name, composer, key] = pieceLine.split("|");
        let pieceObj = { name, composer, key };
        collection.push(pieceObj);
    }

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Stop") {
        let tokens = commandLine.split("|");
        let command = tokens[0];
        let pieceName = tokens[1];
        let selectedPiece = collection.find(p => p.name === pieceName);

        switch (command) {
            case "Add":
                let composer = tokens[2];
                let key = tokens[3];

                if (!!selectedPiece) {
                    console.log(`${pieceName} is already in the collection!`);
                } else {
                    let newPieceObj = {
                        name: pieceName,
                        composer,
                        key
                    };

                    collection.push(newPieceObj);
                    console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
                }
                break;

            case "Remove":
                if (!selectedPiece) {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                } else {
                    let pieceIndex = collection.indexOf(selectedPiece);
                    collection.splice(pieceIndex, 1);
                    console.log(`Successfully removed ${pieceName}!`);
                }
                break;

            case "ChangeKey":
                let newKey = tokens[2];

                if (!selectedPiece) {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
                } else {
                    selectedPiece.key = newKey;
                    console.log(`Changed the key of ${pieceName} to ${newKey}!`);
                }
                break;
        }

        index++;
        commandLine = input[index];
    }

    collection.forEach(piece => console.log(`${piece.name} -> Composer: ${piece.composer}, Key: ${piece.key}`));
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);