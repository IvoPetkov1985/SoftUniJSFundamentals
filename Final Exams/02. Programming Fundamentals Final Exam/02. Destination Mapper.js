function destinationMapper(inputText) {
    const destinationPattern = /(\/|=)[A-Z][A-Za-z]{2,}\1/g;
    const destNamePattern = /[A-Za-z]+/g;

    let destinationMatches = inputText.match(destinationPattern);
    let validDestinations = {};

    let destResultString = "";
    let travelPoints = 0;

    if (!!destinationMatches) {
        for (let destination of destinationMatches) {
            let destName = destination.match(destNamePattern)[0];
            validDestinations[destName] = destName.length;
        }

        destResultString = Object.keys(validDestinations).join(", ");
        travelPoints = Object.values(validDestinations)
            .reduce((acc, x) => acc + x, 0);
    }

    console.log(`Destinations: ${destResultString}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("");