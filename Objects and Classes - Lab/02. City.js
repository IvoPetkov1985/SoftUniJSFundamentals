function city(obj) {
    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

function city2(obj) {
    for (let kvp of Object.entries(obj)) {
        let [key, value] = kvp;
        console.log(`${key} -> ${value}`);
    }
}

city2({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});