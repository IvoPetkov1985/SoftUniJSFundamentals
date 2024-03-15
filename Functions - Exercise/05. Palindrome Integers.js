function palindromeIntegers(arrayOfInts) {
    for (let integer of arrayOfInts) {
        let integerAsString = integer.toString();
        console.log(isPalindrome(integerAsString));
    }

    function isPalindrome(numAsStr) {
        let reversedNumAsStr = "";

        for (let i = numAsStr.length - 1; i >= 0; i--) {
            reversedNumAsStr += numAsStr[i];
        }

        return numAsStr == reversedNumAsStr;
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);

function palindromes(array) {
    for (let i = 0; i < array.length; i++) {
        let currNumAsStr = String(array[i]);
        let reversed = currNumAsStr.split("").reverse().join("");
        console.log(currNumAsStr === reversed);
    }
}

palindromes([123, 323, 421, 121]);
palindromes([32, 2, 232, 1010]);