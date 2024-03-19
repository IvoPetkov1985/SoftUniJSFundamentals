function spiceMustFlow(startingYield) {
    const workersConsumption = 26;
    let yield = startingYield;
    let days = 0;
    let totalSpiceExtracted = 0;

    while (yield >= 100) {
        totalSpiceExtracted += yield - workersConsumption;
        yield -= 10;
        days++;

        if (yield < 100) {

            if (totalSpiceExtracted >= workersConsumption) {
                totalSpiceExtracted -= workersConsumption;
            } else {
                totalSpiceExtracted = 0;
            }
        }
    }

    console.log(days);
    console.log(totalSpiceExtracted);
}

spiceMustFlow(111);
spiceMustFlow(450);