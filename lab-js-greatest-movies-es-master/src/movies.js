const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movie) => movie.director);
    // return allDirectors;
    const listNoRepeatDirectors = allDirectors.filter(
        (repetedDirectors, index) => {
            return allDirectors.indexOf(repetedDirectors) === index;
        }
    );
    return listNoRepeatDirectors;
}
console.log(`Iteration 1: All directors?`);
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter(
        (spielDirector) => spielDirector.director === 'Steven Spielberg'
    );
    // return spielberg;
    const genreDrama = spielberg.filter((movie) => movie.genre.includes('Drama'));
    return genreDrama;
}
console.log(
    `Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?`
);
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scores = moviesArray.map((movie) => movie.score);
    // return scores;
    const sumScores = scores.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
    // return sumScores;
    const total = sumScores / scores.length;
    return total.toFixed(2);
}
console.log(
    `Iteration 3: All scores average - Get the average of all scores with 2 decimals`
);
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderYear = moviesArray.sort((year1, year2) => year1.year - year2.year);
    return orderYear;
}

console.log(
    `Iteration 5: Ordering by year - Order by year, ascending (in growing order)`
);
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderTitle = moviesArray
        .map((movieTitle) => movieTitle.title)
        .sort()
        .slice(0, 20);
    return orderTitle;
}

console.log(
    `Iteration 6: Alphabetic Order - Order by title and print the first 20 titles)`
);
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        howManyMovies,
        scoresAverage,
        dramaMoviesScore,
        orderByYear,
        orderAlphabetically,
        turnHoursToMinutes,
        bestYearAvg
    };
}