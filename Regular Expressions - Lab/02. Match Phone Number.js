function matchPhoneNumber([input]) {
    let pattern = /\+359([- ])2\1\d{3}\1\d{4}\b/gm;

    let validPhones = [];

    let validPhone = pattern.exec(input);

    while (validPhone !== null) {
        validPhones.push(validPhone[0]);

        validPhone = pattern.exec(input);
    }

    let result = validPhones.join(", ");
    console.log(result);
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
matchPhoneNumber(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222']);

function matchPhones([inputText]) {
    let pattern = RegExp(/\+359([- ])2\1\d{3}\1\d{4}\b/gm);

    let arrayOfValidPhones = inputText.match(pattern);

    let finalResult = arrayOfValidPhones.join(", ");
    console.log(finalResult);
}

matchPhones(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
matchPhones(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222']);
