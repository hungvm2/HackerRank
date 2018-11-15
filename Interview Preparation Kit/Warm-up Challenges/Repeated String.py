def repeatedString(s, n):
    m = len(s)
    if m < 1 or m > 100:
        return None
    if n < 1 or n > 10 ** 12:
        return None
    numb_of_a_in_s = 0
    for val in list(s):
        if val == 'a':
            numb_of_a_in_s += 1
    if numb_of_a_in_s == 0:
        return 0
    else:
        int_numb_of_s = n // m 
        remained_numb_of_a = 0
        for val in list(s[:n%m]):
            if val == 'a':
                remained_numb_of_a += 1
    return int_numb_of_s * numb_of_a_in_s + remained_numb_of_a
print(repeatedString('aba',10))