// There exists exactly one Pythagorean triplet for which
// a + b + c = 1000
// Find the product abc.

for (let a = 1; a < 1000; a++) {
    for (let b = 1; b < 1000; b++) {
        let c = 1000 - a - b;
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
            console.log(a, b, c);
            console.log(a * b * c);
            process.exit(1);
        }
    }
}
