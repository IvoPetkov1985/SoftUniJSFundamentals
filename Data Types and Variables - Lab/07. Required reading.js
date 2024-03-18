function requiredReading(bookPages, pagesPerHour, daysCount) {
    let hoursNeeded = bookPages / pagesPerHour;
    let hoursPerDay = hoursNeeded / daysCount;

    console.log(hoursPerDay);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);