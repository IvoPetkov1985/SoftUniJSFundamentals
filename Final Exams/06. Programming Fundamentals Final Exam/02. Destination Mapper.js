function destinationMapper(input) {
    let text = input[0];
    let destinationPattern = /(=|\/)(?<country>[A-Z][A-Za-z]{2,})\1/g;

    let allDestinations = {};

    let destinationsToVisit = Array.from(text.matchAll(destinationPattern))
        .map(d => d.groups.country);

    destinationsToVisit.forEach(d => allDestinations[d] = d.length);

    let travelPoints = Object.values(allDestinations).reduce((acc, x) => acc + x, 0);
    console.log(`Destinations: ${destinationsToVisit.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper(['=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=']);
destinationMapper(['ThisIs some InvalidInput']);