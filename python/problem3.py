from helpers import primes
n = 600851475143

ps = primes.genprimes(1000000)

for index in range(len(ps)):
    if n % ps[len(ps) - index - 1] == 0:
        print(ps[len(ps) - index - 1])
        break
    