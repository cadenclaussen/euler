let fib1 = 1;
let fib2 = 2;
let sum = 2;
while (fib2 < 4000000) {
    fib3 = fib1 + fib2;
    if (fib3 % 2 === 0) {
        sum += fib3;
    }
    fib1 = fib2;
    fib2 = fib3;
}
console.log(sum);
