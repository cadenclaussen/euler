import palindrome

for index in range(998001):
    if palindrome.isPalindrome(998001 - index):
        if index < 5000:
            print(998001 - index)
