function monthPrinter(number) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const errorMsg = "Error!";
    let output = "";

    if (number >= 1 && number <= 12) {
        output = months[number - 1];
    } else {
        output = errorMsg;
    }

    console.log(output);
}

monthPrinter(2);
monthPrinter(13);
monthPrinter(4);