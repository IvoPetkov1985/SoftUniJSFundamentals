function movies(inputArray) {
    let movies = [];

    for (let line of inputArray) {
        if (line.includes("addMovie")) {
            let name = line.split("addMovie ")[1];
            movies.push({ name });
        } else if (line.includes("directedBy")) {
            let [name, director] = line.split(" directedBy ");
            let selectedMovie = movies.find(m => m.name === name);

            if (selectedMovie) {
                selectedMovie["director"] = director;
            }
        } else if (line.includes("onDate")) {
            let [name, date] = line.split(" onDate ");
            let selectedMovie = movies.find(m => m.name === name);

            if (selectedMovie) {
                selectedMovie["date"] = date;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
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