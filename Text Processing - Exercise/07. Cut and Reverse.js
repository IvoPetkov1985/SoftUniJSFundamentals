function cutAndReverse(inputString) {
    let firstHalf = inputString.slice(0, inputString.length / 2);
    let secondHalf = inputString.slice(inputString.length / 2);

    let firstString = firstHalf.split("").reverse().join("");
    let secondString = secondHalf.split("").reverse().join("");

    console.log(firstString);
    console.log(secondString);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");