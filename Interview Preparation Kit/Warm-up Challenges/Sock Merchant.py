def sockMerchant(n, ar):
    if n < 1 and n > 100:
        return None
    thisdict = {}
    count = 0
    for i in ar:
        if i < 1 and i >100:
            return None
        if str(i) not in thisdict:
            thisdict[str(i)] = 1
        else:
            thisdict[str(i)] += 1
    for j in thisdict:
        if thisdict[j] >= 2:
            count += thisdict[j]//2
    return count