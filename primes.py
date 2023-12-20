import math

def genprimes(top):
    primeslist = [2, 3]
    for n in range(5, top, 2):
        works = True
        for prime in primeslist:
            if prime > math.sqrt(n):
                break
            if n % prime == 0:
                works = False
                break
        if works == True:
            primeslist.append(n)
    
    return primeslist


