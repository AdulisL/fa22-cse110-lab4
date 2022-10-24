// Question 16
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const key in statistics) {
    if (statistics.hasOwnProperty.call(statistics, key)) {
        const element = statistics[key];
        if ((element % 2) != 0) {
            console.log(element);
        }
    }
}