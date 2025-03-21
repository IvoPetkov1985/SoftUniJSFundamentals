function mirrorWords(input) {
    let pairsPattern = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
    let text = input[0];
    let pairsMatches = text.match(pairsPattern);

    let mirrorPairs = {};

    if (!!pairsMatches) {
        for (let pair of pairsMatches) {
            let lettersPattern = /[A-Za-z]+/g;

            let innerMatches = pair.match(lettersPattern);
            let firstWord = innerMatches[0];
            let secondWord = innerMatches[1];

            if (firstWord === secondWord.split("").reverse().join("")) {
                mirrorPairs[firstWord] = secondWord;
            }
        }

        console.log(`${pairsMatches.length} word pairs found!`);
    } else {
        console.log("No word pairs found!");
    }

    let resultArray = Object.entries(mirrorPairs);

    if (resultArray.length > 0) {
        console.log("The mirror words are:");
        console.log(resultArray.map(x => `${x[0]} <=> ${x[1]}`).join(", "));
    } else {
        console.log("No mirror words!");
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);