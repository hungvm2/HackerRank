'use strict';

function countingValleys(n, s) {
    if ((n < 2) || (n > Math.pow(10, 6))) {
        return;
    }
    let highlv = 0;
    let steparr = s.split('');
    let valley = 0;
    for (let val of steparr) {
        if ((val != 'D') && (val != 'U')) {
            return;
        }
        if (val == 'D') {
            highlv--;
            if ((highlv == -1) && (val == 'D')) {
                valley++;
            };
            continue;
        }
        if (val == 'U') {
            highlv++;
        };
    };
    return valley;
}

console.log(countingValleys(8, 'UDDDUDUU'))