function splitter(inputString) {
    let resultArr = [];
    let currentString = "";

    for (let i = 0; i < inputString.length; i++) {
        if (/[A-Z]/.test(inputString[i]) && i !== 0) {
            resultArr.push(currentString);
            currentString = "";
            currentString += inputString[i];
        } else {
            currentString += inputString[i];
        }
    }

    resultArr.push(currentString);
    let finalResult = resultArr.join(", ");

    console.log(finalResult);
}

splitter("HoldTheDoor");
splitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
splitter("ThisIsSoAnnoyingToDo");