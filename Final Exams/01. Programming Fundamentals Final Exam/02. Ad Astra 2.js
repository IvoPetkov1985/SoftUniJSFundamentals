function adAstra(input) {
    let text = input[0];

    let pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let matches = text.matchAll(pattern);
    let foodItems = [];

    for (let match of matches) {
        let name = match.groups.name;
        let date = match.groups.date;
        let calories = Number(match.groups.calories);
        let foodObject = { name, date, calories };
        foodItems.push(foodObject);
    }

    let totalCalories = foodItems.reduce((acc, item) => acc + item.calories, 0);
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    foodItems.forEach(item => console.log(`Item: ${item.name}, Best before: ${item.date}, Nutrition: ${item.calories}`));

}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']
);

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']
);

adAstra("Hello|#Invalid food#19/03/20#450|$5*(@");