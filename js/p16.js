let n = BigInt(Math.pow(2, 1000));
console.log(n);
let sum = 0;
for (let ch of n.toString()) {
    sum += parseInt(ch);
}
console.log(sum);
