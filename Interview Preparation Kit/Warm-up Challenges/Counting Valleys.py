def countingValleys(n, s):
    if n > 10 ** 6 or n < 2:
        return None
    valley = 0
    highlv = 0
    string_arr = list(s)
    for val in string_arr:
        if not (val == 'U' or val == 'D'):
            return None
        if val == 'U':
            highlv += 1
        elif val == 'D':
            highlv -= 1
            if highlv == -1:
                valley += 1
    return valley
print(countingValleys(15,'UDDUUUUDDDDUUUD'))