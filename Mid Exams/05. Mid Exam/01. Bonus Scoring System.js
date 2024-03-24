function bonusScoringSystem(input) {
    let numberOfStudents = Number(input.shift());
    let numberOfLectures = Number(input.shift());
    let additionalBonus = Number(input.shift());

    let maxBonus = 0;
    let maxBonusLectures = 0;

    for (let i = 0; i < numberOfStudents; i++) {
        let studentAttendances = Number(input[i]);
        let totalBonus = studentAttendances / numberOfLectures * (5 + additionalBonus);

        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            maxBonusLectures = studentAttendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxBonusLectures} lectures.`);
}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);