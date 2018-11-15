'use strict';

function repeatedString(s, n) {
    const m = s.length;
    const s_to_arr = s.split('');
    if (m < 1 || m > 100) {
        return;
    }
    if (n < 1 || n > Math.pow(10, 12)) {
        return;
    }
    let numb_of_a_in_s = 0;
    for (let val of s_to_arr) {
        if (val == 'a') {
            numb_of_a_in_s++;
        }
    }
    let int_numb_of_s = 0;
    let remained_numb_of_a = 0;
    if (numb_of_a_in_s == 0) {
        return 0;
    } else {
        int_numb_of_s = Math.floor(n / m);
        for (let val of s_to_arr.slice(0, n % m)) {
            if (val == 'a') {
                remained_numb_of_a++;
            }
        }
    }
    return int_numb_of_s * numb_of_a_in_s + remained_numb_of_a;
}

console.log(repeatedString('abda', 10));