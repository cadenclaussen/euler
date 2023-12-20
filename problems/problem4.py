from helpers import palindrome

for index in range(998001):
    if palindrome.isPalindrome(998001 - index):
        if index < 10000:
            print(998001 - index)
