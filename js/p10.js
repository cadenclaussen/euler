let primes = require('./prime').primes(2000000);
let sum = 0;
for (let prime of primes) {
    sum += prime;
}
console.log(sum);
