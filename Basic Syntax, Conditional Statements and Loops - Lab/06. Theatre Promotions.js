function theatrePromotions(typeOfDay, personAge) {
    const age = Number(personAge);
    const errorMsg = "Error!";
    let result = "";

    if (age >= 0 && age <= 18) {
        switch (typeOfDay) {
            case "Weekday": result = "12$"; break;
            case "Weekend": result = "15$"; break;
            case "Holiday": result = "5$"; break;
        }
    } else if (age > 18 && age <= 64) {
        switch (typeOfDay) {
            case "Weekday": result = "18$"; break;
            case "Weekend": result = "20$"; break;
            case "Holiday": result = "12$"; break;
        }
    } else if (age > 64 && age <= 122) {
        switch (typeOfDay) {
            case "Weekday": result = "12$"; break;
            case "Weekend": result = "15$"; break;
            case "Holiday": result = "10$"; break;
        }
    } else {
        result = errorMsg;
    }

    console.log(result);
}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);