// A palindromic number reads the same both ways. The largest palindrome made from the product of two-digit numbers is:
// 9009 = 91 x 99
// Find the largest palindrome made from the product of two 3-digit numbers.
let palindromes = [];
for (let x = 100; x <= 999; x++) {
    for (let y = 100; y <= 999; y++) {
        let p = x * y;
        if (isPalindrome(p)) {
            palindromes.push(p);
        }
    }
}

let sorted = palindromes.sort((a, b) => a - b);
console.log(sorted[sorted.length - 1]);

function isPalindrome(n) {
    let s = n.toString();
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
