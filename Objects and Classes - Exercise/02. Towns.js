function towns(arrayOfTowns) {
    for (let townInfo of arrayOfTowns) {
        let [townName, latitudeAsStr, longitudeAsStr] = townInfo.split(" | ");
        let latitude = Number(latitudeAsStr);
        let longitude = Number(longitudeAsStr);
        let townObj = {
            town: townName,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        };

        console.log(townObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

towns(['Plovdiv | 136.45 | 812.575']);