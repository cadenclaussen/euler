let x = factorial(BigInt(100));
console.log(x);
let sum = 0;
for (let ch of x.toString()) {
    sum += parseInt(ch);
}
console.log(sum);

function factorial(n) {
    if (n === BigInt(1)) {
        return 1;
    }
    return BigInt(BigInt(n) * BigInt(factorial(n - BigInt(1))));
}
