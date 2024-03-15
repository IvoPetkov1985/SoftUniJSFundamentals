function passwordValidator(password) {
    let isLengthNormal = isLengthValid(password);
    let hasOnlyDigitsAndLet = hasOnlyDigitsAndLetters(password);
    let hasEnoughDigits = hasTwoOrMoreDigits(password);

    if (isLengthNormal && hasOnlyDigitsAndLet && hasEnoughDigits) {
        console.log("Password is valid");
    }

    function isLengthValid(pwd) {
        if (pwd.length >= 6 && pwd.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function hasOnlyDigitsAndLetters(pwd) {
        for (let char of pwd) {
            let charCode = char.charCodeAt(0);

            if (
                !((charCode >= 48 && charCode <= 57) ||
                (charCode >= 65 && charCode <= 90) ||
                (charCode >= 97 && charCode <= 122))
            ) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }

        return true;
    }

    function hasTwoOrMoreDigits(pwd) {
        let digitCounter = 0;

        for (let char of pwd) {
            let charCode = char.charCodeAt(0);

            if (charCode >= 48 && charCode <= 57) {
                digitCounter++;
            }
        }

        if (digitCounter < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {
            return true;
        }
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');