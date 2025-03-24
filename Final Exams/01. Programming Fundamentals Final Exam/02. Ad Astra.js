function adAstra(input) {
    let text = input[0];

    let pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let matches = text.match(pattern);

    let splitPattern = /(\||#)/g;
    let foodItems = [];

    if (!!matches) {

        for (let match of matches) {
            let foodTokens = match.split(splitPattern);
            let foodName = foodTokens[2];
            let foodExpiry = foodTokens[4];
            let foodCalories = Number(foodTokens[6]);
            let foodObj = {
                name: foodName,
                date: foodExpiry,
                calories: foodCalories
            };
            foodItems.push(foodObj);
        }

        let sum = foodItems.reduce((acc, x) => acc + x.calories, 0);
        let days = Math.floor(sum / 2000);
        console.log(`You have food to last you for: ${days} days!`);

        for (let food of foodItems) {
            console.log(`Item: ${food.name}, Best before: ${food.date}, Nutrition: ${food.calories}`);
        }
    } else {
        console.log("You have food to last you for: 0 days!");
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);

adAstra("Hello|#Invalid food#19/03/20#450|$5*(@");