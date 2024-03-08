function studentInformation(name, age, grade) {
    let studentAge = Number(age);
    let studentGrade = Number(grade).toFixed(2);

    console.log(`Name: ${name}, Age: ${studentAge}, Grade: ${studentGrade}`);
}

studentInformation('John', 15, 5.54678);
studentInformation('Steve', 16, 2.1426);
studentInformation('Marry', 12, 6.00);

function studentInfo(name, age, grade) {
    const studentAge = Number(age);
    const studentGrade = Number(grade);

    let student = {};
    student.name = name;
    student.age = studentAge;
    student.grade = studentGrade;

    console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade.toFixed(2)}`);
}

studentInfo('John', 15, 5.54678);
studentInfo('Steve', 16, 2.1426);
studentInfo('Marry', 12, 6.00);