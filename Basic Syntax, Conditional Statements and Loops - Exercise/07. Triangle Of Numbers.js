function triangleOfNumbers(number) {
    let inputNumber = Number(number);

    for (let i = 1; i <= inputNumber; i++) {
        console.log((i + " ").repeat(i));
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);

function triangle(number) {
    for (let i = 1; i <= number; i++) {

        let output = "";

        for (let j = 1; j <= i; j++) {
            
            if (j < i) {
                output += i + " ";
            } else {
                output += i;
            }
        }

        console.log(output.trimEnd());
    }
}

triangle(3);
triangle(5);
triangle(9);