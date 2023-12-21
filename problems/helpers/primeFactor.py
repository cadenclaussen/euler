from helpers import primes
import math

def factor(n, ps):
    form = {}

    while n != 1:
        for prime in ps:
            if n % prime == 0:
                n /= prime
                form.setdefault(prime, 0)
                form[prime] += 1
                break
    
    return form
