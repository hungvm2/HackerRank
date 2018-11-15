'use strict';

function jumpingOnClouds(c) {
    const n = c.length;
    if (n < 2 || n > 100) {
        return;
    };
    if (c[0] == 1) {
        return;
    };
    let count = -1;
    for (let i = 0; i < n; i++) {
        count++;
        if (i + 2 < n && c[i + 2] == 0) {
            i++;
        };
    };
    return count;
};

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));