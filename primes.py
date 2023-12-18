primeslist = [2, 3]

for n in range(4, 775148):
    works = True
    for prime in primeslist:
        if n % prime == 0:
            works = False
    if works == True:
        primeslist.append(n)
