function nXNMatrix(number) {
    for (let i = 1; i <= number; i++) {
        console.log(`${number} `.repeat(number));
    }
}

nXNMatrix(3);
nXNMatrix(7);
nXNMatrix(2);

function matrix(num) {
    for (let i = 1; i <= num; i++) {
        let row = "";

        for (let j = 1; j <= num; j++) {

            if (j === num) {
                row += num;
            } else {
                row += num + " ";
            }
        }

        console.log(row);
    }
}

matrix(5);
matrix(10);