let number = 600851475143;
let primes = require('./prime').primes(Math.sqrt(number));
for (let i = primes.length - 1; i > 0; i--) {
    let prime = primes[i];
    if (number % prime === 0) {
        console.log(prime);
        process.exit(1);
    }
}
