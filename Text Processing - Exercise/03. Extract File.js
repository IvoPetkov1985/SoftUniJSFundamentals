function extractFile(fileString) {
    let filePathFragments = fileString.split("\\");
    let fileInfo = filePathFragments[filePathFragments.length - 1];
    let dotIndex = fileInfo.lastIndexOf(".");
    
    let fileName = fileInfo.slice(0, dotIndex);
    let fileExtension = fileInfo.slice(dotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");