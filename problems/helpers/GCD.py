def gcd(a, b):
    if a > b:
        bigger = a
        smaller = b
    else:
        bigger = b
        smaller = a
    pair = [bigger, smaller]
    while pair[0] != pair[1]:
        pair[pair.index(max(pair))] = max(pair) - min(pair)
    return pair[0]

