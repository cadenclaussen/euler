import primes
n = 600851475143

ps = primes.primeslist
ofps = ps[len(ps) - index - 1]

for index in range(len(ps)):
    if n % ofps == 0:
        print(ofps)
        break