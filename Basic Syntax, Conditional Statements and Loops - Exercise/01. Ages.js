function ages(inputNumber) {
    const number = Number(inputNumber);

    let output = "";

    if (number < 0) {
        output = "out of bounds";
    } else if (number >= 0 && number <= 2) {
        output = "baby";
    } else if (number >= 3 && number <= 13) {
        output = "child";
    } else if (number >= 14 && number <= 19) {
        output = "teenager";
    } else if (number >= 20 && number <= 65) {
        output = "adult";
    } else if (number >= 66) {
        output = "elder";
    }

    console.log(output);
}

ages(-20);
ages(20);
ages(1);
ages(100);
ages(14);