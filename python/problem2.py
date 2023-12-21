fibonacci = [1, 2]
index = 2
sum = 2

while max(fibonacci) < 4000000:
    n = fibonacci[index - 2] + fibonacci[index - 1]
    fibonacci.append(n)
    index += 1
    if n % 2 == 0:
        sum += n

print(sum)