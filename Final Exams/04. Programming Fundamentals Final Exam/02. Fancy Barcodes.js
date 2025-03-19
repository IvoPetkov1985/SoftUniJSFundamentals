function fancyBarcodes(input) {
    let barcodePattern = /^@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+$/;
    let digitPattern = /\d/g;

    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let currentBarcode = input[i];

        if (!barcodePattern.test(currentBarcode)) {
            console.log("Invalid barcode");
        } else {
            let matchResult = currentBarcode.match(digitPattern);
            let productGroup = "";

            if (!matchResult) {
                productGroup = "00";
            } else {
                productGroup = matchResult.reduce((acc, x) => acc + x, "");
            }

            console.log(`Product group: ${productGroup}`);
        }
    }
}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]
);

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]
);