from helpers import GCD

def lcm(a, b):
    return a * b / GCD.gcd(a, b)
