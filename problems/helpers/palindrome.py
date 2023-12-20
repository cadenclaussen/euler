def isPalindrome(n):
    palindrome = True
    string_n = str(n)
    char_n = list(string_n)
    while len(char_n) > 1:
        if char_n[0] != char_n[len(char_n) - 1]:
            palindrome = False
            break
        else:
            char_n.pop(0)
            char_n.pop(len(char_n) - 1)
    return palindrome


