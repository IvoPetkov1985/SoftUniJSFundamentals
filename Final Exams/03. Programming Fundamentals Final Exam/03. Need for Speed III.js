function needForSpeed(input) {
    const carsCount = input.shift();
    let garage = [];

    for (let i = 0; i < carsCount; i++) {
        let carInfoLine = input.shift();
        let [carModel, mileage, fuel] = carInfoLine.split("|");
        let currentCar = {
            model: carModel,
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
        garage.push(currentCar);
    }

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== "Stop") {
        let tokens = commandLine.split(" : ");
        let command = tokens[0];
        let carModel = tokens[1];
        let selectedCar = garage.find(c => c.model === carModel);

        if (command === "Drive") {
            let distance = Number(tokens[2]);
            let neededFuel = Number(tokens[3]);

            if (selectedCar.fuel >= neededFuel) {
                selectedCar.mileage += distance;
                selectedCar.fuel -= neededFuel;
                console.log(`${carModel} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);

                if (selectedCar.mileage >= 100000) {
                    let carIndex = garage.indexOf(selectedCar);
                    garage.splice(carIndex, 1);
                    console.log(`Time to sell the ${carModel}!`);
                }
            } else {
                console.log("Not enough fuel to make that ride");
            }
        } else if (command === "Refuel") {
            let fuelToAdd = Number(tokens[2]);
            let oldQty = selectedCar.fuel;
            selectedCar.fuel += fuelToAdd;
            let diff = 0;

            if (selectedCar.fuel > 75) {
                selectedCar.fuel = 75;
                diff = 75 - oldQty;
            } else {
                diff = fuelToAdd;
            }

            console.log(`${carModel} refueled with ${diff} liters`);
        } else if (command === "Revert") {
            let kilometers = Number(tokens[2]);
            selectedCar.mileage -= kilometers;

            if (selectedCar.mileage >= 10000) {
                console.log(`${carModel} mileage decreased by ${kilometers} kilometers`);
            } else {
                selectedCar.mileage = 10000;
            }
        }

        index++;
        commandLine = input[index];
    }

    garage.forEach(car => {
        console.log(`${car.model} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`);
    });
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);