import math

def primes(n):
    primes = [ 1, 2]
    for i in range(3, n, 2):
        isPrime = True
        max = math.floor(math.sqrt(i))
        for prime in primes:
            if prime > max:
                break
            if prime == 1 or prime == 2:
                continue
            if i % prime == 0:
                isPrime = False
                break
        if isPrime:
            primes.append(i);
    return primes

print(primes(math.floor(math.sqrt(600851475143))));
