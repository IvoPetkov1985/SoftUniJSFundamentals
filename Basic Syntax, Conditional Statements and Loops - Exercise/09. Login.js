function login(arrayOfStrings) {
    let username = arrayOfStrings.shift();
    let password = username.split("").reverse().join("");

    let triesCount = 0;

    for (let userInput of arrayOfStrings) {
        triesCount++;

        if (userInput === password) {
            console.log(`User ${username} logged in.`);
            triesCount = 0;
        } else {
            if (triesCount < 4) {
                console.log("Incorrect password. Try again.");
            } else {
                console.log(`User ${username} blocked!`);
                break;
            }
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);