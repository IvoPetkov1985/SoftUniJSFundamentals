function movies(inputArray) {
    let moviesCollection = [];

    for (let infoLine of inputArray) {
        if (infoLine.includes("addMovie")) {
            let tokens = infoLine.split("addMovie ");
            let movieName = tokens[1];
            let movieObj = { name: movieName };
            moviesCollection.push(movieObj);
        } else if (infoLine.includes("directedBy")) {
            let tokens = infoLine.split(" directedBy ");
            let movieName = tokens[0];
            let movieDirector = tokens[1];

            let searchedMovie = moviesCollection.find(m => m.name === movieName);

            if (searchedMovie !== undefined) {
                searchedMovie["director"] = movieDirector;
            }
        } else if (infoLine.includes("onDate")) {
            let tokens = infoLine.split(" onDate ");
            let movieName = tokens[0];
            let releaseDate = tokens[1];

            let searchedMovie = moviesCollection.find(m => m.name === movieName);

            if (searchedMovie !== undefined) {
                searchedMovie["date"] = releaseDate;
            }
        }
    }

    for (let movie of moviesCollection) {
        if (movie.name && movie.director && movie.date) {
            let movieAsJson = JSON.stringify(movie);
            console.log(movieAsJson);
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);