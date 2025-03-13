function emojiDetector(input) {
    let emojiPattern = /(\*{2}|\:{2})[A-Z][a-z]{2,}\1/g;
    let digitPattern = /\d/g;
    let emojiTextPattern = /[A-Za-z]+/g;

    let text = input[0];
    
    let digitArray = Array.from(text.match(digitPattern)).map(Number);
    let threshold = digitArray.reduce((acc, x) => acc * x, 1);
    let emojiArray = Array.from(text.match(emojiPattern));

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiArray.length} emojis found in the text. The cool ones are:`);
    
    for (let currentEmoji of emojiArray) {
        let emojiText = currentEmoji.match(emojiTextPattern)[0];
        let emojiSum = emojiText.split("").reduce((acc, x) => acc + x.charCodeAt(0), 0);

        if (emojiSum > threshold) {
            console.log(currentEmoji);
        }
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);