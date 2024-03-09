function dayOfWeek(number) {
    const dayNum = Number(number);
    const errorMsg = "Invalid day!";

    const weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if (dayNum < 1 || dayNum > 7) {
        console.log(errorMsg);
    } else {
        console.log(weekDays[dayNum - 1]);
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(-11);
dayOfWeek(7);
dayOfWeek(1);
dayOfWeek(0);