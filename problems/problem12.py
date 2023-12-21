from helpers import countdivisors
from helpers import primes

numberOfDivisors = 0
n = 4
ps = primes.genprimes(50000000)
print(ps)

def gentriangle(n):
    return n * (n+1)/2

while numberOfDivisors <= 500:
    numberOfDivisors = max(countdivisors.countdivisor(gentriangle(n), ps), numberOfDivisors)
    n += 1

print(gentriangle(n - 1))
