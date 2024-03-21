function theLift(input) {
    let peopleWaiting = Number(input.shift());
    let lift = input.shift().split(" ").map(x => Number(x));
    const maxWagonCapacity = 4;

    for (let i = 0; i < lift.length; i++) {
        if (lift[i] < maxWagonCapacity) {
            if (peopleWaiting >= maxWagonCapacity - lift[i]) {
                peopleWaiting -= maxWagonCapacity - lift[i];
                lift[i] = maxWagonCapacity;
            } else {
                lift[i] += peopleWaiting;
                peopleWaiting = 0;
            }
        }
    }

    let isLiftFull = lift.every(x => x === maxWagonCapacity);

    if (isLiftFull && peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
    } else if (!isLiftFull) {
        console.log("The lift has empty spots!");
    }

    console.log(lift.join(" "));
}

theLift([
    "15",
    "0 0 0 0 0"
]);

theLift([
    "20",
    "0 2 0"
]);