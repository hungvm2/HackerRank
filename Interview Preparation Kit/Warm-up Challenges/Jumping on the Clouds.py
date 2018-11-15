def jumpingOnClouds(c):
    n = len(c)
    if n < 2 or n > 100:
        return None
    if c[0] == 1:
        return None
    count = -1
    i = 0
    while i < n:
        count += 1
        if i+2<n and c[i+2] == 0:
            i += 2
        else:
            i += 1
    return count
print(jumpingOnClouds([0,0,1,0,1,0,0,1,0]))
