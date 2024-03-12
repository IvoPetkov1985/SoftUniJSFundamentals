function vacation(peopleCount, groupType, dayOfWeek) {
    let singlePrice = 0;

    switch (groupType) {

        case "Students":

            if (dayOfWeek === "Friday") {
                singlePrice = 8.45;
            } else if (dayOfWeek === "Saturday") {
                singlePrice = 9.80;
            } else if (dayOfWeek === "Sunday") {
                singlePrice = 10.46;
            }
            break;

        case "Business":

            if (dayOfWeek === "Friday") {
                singlePrice = 10.90;
            } else if (dayOfWeek === "Saturday") {
                singlePrice = 15.60;
            } else if (dayOfWeek === "Sunday") {
                singlePrice = 16.00;
            }
            break;

        case "Regular":

            if (dayOfWeek === "Friday") {
                singlePrice = 15.00;
            } else if (dayOfWeek === "Saturday") {
                singlePrice = 20.00;
            } else if (dayOfWeek === "Sunday") {
                singlePrice = 22.50;
            }
            break;
    }

    let totalPrice = singlePrice * peopleCount;

    if (groupType === "Students" && peopleCount >= 30) {
        totalPrice *= 0.85;
    }

    if (groupType === "Business" && peopleCount >= 100) {
        totalPrice -= (10 * singlePrice);
    }

    if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(
    30,
    "Students",
    "Sunday"
);

vacation(
    40,
    "Regular",
    "Saturday"
);