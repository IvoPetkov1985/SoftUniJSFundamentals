function searchForANumber(inputArray, commands) {
    let elementsToTake = commands[0];
    let elementsToRemove = commands[1];
    let searchedNumber = commands[2];

    let takenNums = inputArray.slice(0, elementsToTake);
    takenNums.splice(0, elementsToRemove);
    let foundNumArray = takenNums.filter(el => el === searchedNumber);
    let occurrences = foundNumArray.length;

    console.log(`Number ${searchedNumber} occurs ${occurrences} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);