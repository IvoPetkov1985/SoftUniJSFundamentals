function guineaPig(input) {
    let food = Number(input[0]);
    let hay = Number(input[1]);
    let cover = Number(input[2]);
    let pigsWeight = Number(input[3]);

    let totalFoodInG = food * 1000;
    let totalHayInG = hay * 1000;
    let totalCoverInG = cover * 1000;
    let weightInG = pigsWeight * 1000;

    const totalDays = 30;
    let isEverythingFine = true;

    for (let i = 1; i <= totalDays; i++) {
        totalFoodInG -= 300;

        if (i % 2 === 0) {
            let currentHay = totalFoodInG * 0.05;
            totalHayInG -= currentHay;
        }

        if (i % 3 === 0) {
            let currentCover = weightInG / 3;
            totalCoverInG -= currentCover;
        }

        if (totalFoodInG <= 0 || totalHayInG <= 0 || totalCoverInG <= 0) {
            console.log("Merry must go to the pet store!");
            isEverythingFine = false;
            break;
        }
    }

    if (isEverythingFine) {
        let excessFood = (totalFoodInG / 1000).toFixed(2);
        let excessHay = (totalHayInG / 1000).toFixed(2);
        let excessCover = (totalCoverInG / 1000).toFixed(2);
        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood}, Hay: ${excessHay}, Cover: ${excessCover}.`);
    }
}

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);