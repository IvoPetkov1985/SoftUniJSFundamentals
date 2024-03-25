function personInfo(firstName, lastName, age) {
    let myObj = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    return myObj;
}

console.log(personInfo("Peter", "Pan", "20"));
console.log(personInfo("George", "Smith", "18"));

function personInfo2(fName, lName, age) {
    let obj = {};
    obj.firstName = fName;
    obj.lastName = lName;
    obj.age = age;

    return obj;
}

console.log(personInfo2("Peter", "Pan", "20"));
console.log(personInfo2("George", "Smith", "18"));