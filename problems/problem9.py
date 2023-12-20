# We want to find the solutions to the equation a + b + √(a^2 + b^2) = 1000
import math

for a in range(1000):
    for b in range(1000 - a):
        if a + b + math.sqrt(a**2 + b**2) == 1000:
            print(a, b, math.sqrt(a**2 + b**2))
            break