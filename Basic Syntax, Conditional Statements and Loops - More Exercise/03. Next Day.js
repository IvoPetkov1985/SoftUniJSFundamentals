function nextDay(inputYear, inputMonth, inputDay) {
    let inputDate = new Date(inputYear, inputMonth - 1, inputDay);
    let nextDayDate = new Date(inputDate);
    nextDayDate.setDate(nextDayDate.getDate() + 1);

    let year = nextDayDate.getFullYear();
    let month = nextDayDate.getMonth() + 1;
    let day = nextDayDate.getDate();

    let result = `${year}-${month}-${day}`;
    console.log(result);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
nextDay(2020, 12, 31);