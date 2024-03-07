function generator(inputArr) {
    [firstString, secondString, word] = inputArr;

    let biggerString = firstString.concat(secondString);

    let vowels = ["a", "o", "u", "e", "i"];
    let index = 0;
    let resultString = "";

    for (let char of biggerString) {

        if (vowels.includes(char)) {
            char = word[index].toUpperCase();
            index++;

            if (index >= word.length) {
                index = 0;
            }
        }

        resultString += char;
    }

    let password = resultString.split("").reverse().join("");
    console.log(`Your generated password is ${password}`);
}

generator(['ilovepizza', 'ihatevegetables', 'orange']);
generator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
generator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);