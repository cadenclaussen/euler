from helpers import sum

total = 0

for n in range(100):
    total += (n+1)**2

print((sum.add(1, 100))**2 - total)