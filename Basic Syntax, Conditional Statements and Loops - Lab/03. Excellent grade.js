function excellentGrade(grade) {
    const bestGrade = 5.50;
    let result = "";

    if (grade >= bestGrade) {
        result = "Excellent";
    } else {
        result = "Not excellent";
    }

    console.log(result);
}

excellentGrade(4.35);
excellentGrade(5.50);