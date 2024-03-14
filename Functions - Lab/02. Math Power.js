function mathPower(num, pow) {
    let result = 1;

    for (let i = 0; i < pow; i++) {
        result *= num;
    }

    print(result);

    function print(value) {
        console.log(value);
    }
}

mathPower(2, 8);
mathPower(3, 4);