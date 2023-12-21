// Return an array of all primes < n
function generatePrimeNumbersBelow(n) {
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


function generateFirstNPrimeNumbers(n) {
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


function getNthPrimeNumber(n) {
    let firstN = generateFirstNPrimeNumbers(n);
    return firstN[firstN.length - 1];
}


function generateFirstNTriangularNumbers(n) {
    let tri = [ 1 ];
    for (let i = 2; i < n + 1; i++) {
        tri.push(tri[tri.length - 1] + i);
    }
    return tri;
}


function getNthTriangularNumber(n) {
    return (n * (n + 1)) / 2
}


function getPrimeFactors(n) {
    let sqrt = Math.ceiling(Math.sqrt(n));
    let primeNumbers = generatePrimeNumbersBelow(sqrt);
}



module.exports.generatePrimeNumbersBelow = generatePrimeNumbersBelow;
module.exports.generateFirstNPrimeNumbers = generateFirstNPrimeNumbers;
module.exports.getNthPrimeNumber = getNthPrimeNumber;

module.exports.generateFirstNTriangularNumbers = generateFirstNTriangularNumbers;
module.exports.getNthTriangularNumber = getNthTriangularNumber;

module.exports.getPrimeFactors = getPrimeFactors;
