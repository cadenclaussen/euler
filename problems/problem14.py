total = [1, 0]

def collatz(n):
    i = 0
    while n != 1:
        if n % 2 == 0:
            n /= 2
            i += 1
        else:
            n *= 3
            n += 1
            n /= 2
            i += 2
    return i

for startingnumber in range(1, 1000000):
    n = startingnumber
    print(n)
    i = collatz(n)
    if total[0] < i:
        total[0] = i
        total[1] = startingnumber

print(total[1])


