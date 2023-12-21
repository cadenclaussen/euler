let sumSquares = 0;
let squareSums = 0;
for (let n = 1; n <= 100; n++) {
    sumSquares += Math.pow(n, 2);
    squareSums += n;
}
squareSums = Math.pow(squareSums, 2);
console.log(squareSums);
console.log(sumSquares);
console.log(squareSums - sumSquares);
