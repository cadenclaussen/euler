// Return an array of all primes < n
function getPrimesBelow(n) {
    let primes = [ 2 ];
    for (let i = 3; i <= n; i += 2) {
        let isPrime = true;
        let max = Math.floor(Math.sqrt(i));
        for (let prime of primes) {
            if (prime > max) {
                break;
            }
            if (prime === 1 || prime === 2) {
                continue;
            }
            if (i % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}


function getFirstNPrimes(n) {
    let primes = [ 2 ];
    for (let i = 3; primes.length < n; i += 2) {
        let isPrime = true;
        let max = Math.floor(Math.sqrt(i));
        for (let prime of primes) {
            if (prime > max) {
                break;
            }
            if (prime === 1 || prime === 2) {
                continue;
            }
            if (i % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}


function getNthPrime(n) {
    let firstN = getFirstNPrimes(n);
    return firstN[firstN.length - 1];
}


module.exports.getPrimesBelow = getPrimesBelow;
module.exports.getFirstNPrimes = getFirstNPrimes;
module.exports.getNthPrime = getNthPrime;
