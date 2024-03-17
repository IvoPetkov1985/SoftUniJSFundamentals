function lastKNumbersSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let sumToAdd = 0;
        let currSequence = sequence.slice(-k);

        for (let j = 0; j < currSequence.length; j++) {
            sumToAdd += currSequence[j];
        }

        sequence.push(sumToAdd);
    }

    let resultString = sequence.join(" ");
    console.log(resultString);
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);

function lastKNumbersSequence2(neededLength, fragmentLength) {
    let resultArr = [1];

    while (resultArr.length < neededLength) {
        let sum = 0;
        let currSequence = resultArr.slice(fragmentLength * -1);

        for (let i = 0; i < currSequence.length; i++) {
            sum += currSequence[i];
        }

        resultArr.push(sum);
    }

    console.log(resultArr.join(" "));
}

lastKNumbersSequence2(6, 3);
lastKNumbersSequence2(8, 2);