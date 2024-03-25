function blackFlag(input) {
    const daysCount = Number(input[0]);
    const plunderPerDay = Number(input[1]);
    const expectedPlunder = Number(input[2]);

    let totalPlunder = 0;

    for (let i = 1; i <= daysCount; i++) {
        totalPlunder += plunderPerDay;

        if (i % 3 === 0) {
            totalPlunder += plunderPerDay * 0.5;
        }

        if (i % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder * 100 / expectedPlunder
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);