function sockMerchant(n, ar) {
    if (n < 1 || n > 100) {
        return None;
    };
    var count = 0;
    var obj = {};
    for (let val of ar) {
        if (val < 1 || val > 100) {
            return None;
        }
        if (!obj[val]) {
            obj[val] = 1;
        } else {
            obj[val]++;
        }
    };
    for (const prop in obj) {
        count += Math.floor(obj[prop] / 2);
    };
    return count;

}