function emojiDetector2(input) {
    const text = input[0];
    const emojiPattern = /(\*{2}|\:{2})(?<emojiName>[A-Z][a-z]{2,})\1/g;
    const digitPattern = /\d/g;

    const validEmojis = text.matchAll(emojiPattern);
    const digitsArr = text.match(digitPattern);

    const allValidEmojis = [];

    for (const emoji of validEmojis) {
        const emojiString = emoji[0];
        const name = emoji.groups.emojiName;
        const value = name.split("").reduce((acc, x) => acc + x.charCodeAt(0), 0);

        const emojiObj = {
            string: emojiString,
            name: name,
            coolness: value
        };

        allValidEmojis.push(emojiObj);
    }

    const threshold = digitsArr.map(Number).reduce((acc, x) => acc * x, 1);
    const coolEmojis = allValidEmojis.filter(e => e.coolness >= threshold);

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${allValidEmojis.length} emojis found in the text. The cool ones are:`);
    coolEmojis.forEach(emoji => console.log(emoji.string));
}

emojiDetector2(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

emojiDetector2(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

emojiDetector2(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);