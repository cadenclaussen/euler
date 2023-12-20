# Finds all multiples of 3 or 5 below 1000
sum = 0

for n in range(1000):
    if n % 3 == 0:
        sum += n
        continue
    if n % 5 == 0:
        sum += n

print(sum)