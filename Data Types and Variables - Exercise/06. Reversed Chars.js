function reversedChars(firstChar, secondChar, thirdChar) {
    let charArray = [firstChar, secondChar, thirdChar];
    let reversed = charArray.reverse();
    let resultString = reversed.join(" ");
    console.log(resultString);
}

reversedChars('A', 'B', 'C');
reversedChars('1', 'L', '&');