from helpers import primeFactor

def countdivisor(n, ps):
    divisors = 1
    form = primeFactor.factor(n, ps)
    for prime in form:
        divisors *= (form[prime] + 1)
    return divisors