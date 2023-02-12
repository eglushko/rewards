const calcPoints = (sum) => {
    const limit1 = 50, limit2 = 100;
    let points = 0;
    if (sum > limit2) {
        points = (sum - limit2) * 2 + (limit2 - limit1);
    }
    else if (sum > limit1) {
        points = sum - limit1;
    }
    return points;
};

module.exports = calcPoints;