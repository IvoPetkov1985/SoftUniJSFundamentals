function addAndRemove(array) {
    let number = 1;
    let resultArray = [];

    for (let element of array) {

        if (element === "add") {
            resultArray.push(number);
        } else {
            resultArray.pop();
        }

        number++;
    }

    let resultString = resultArray.join(" ");
    const noResultMsg = "Empty";

    if (resultArray.length > 0) {
        console.log(resultString);
    } else {
        console.log(noResultMsg);
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);