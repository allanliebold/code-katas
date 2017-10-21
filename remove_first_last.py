"""Kata: Remove First and Last Character.

Best Practices by zebulan and others

def remove_char(s):
    return s[1 : -1]
"""


def remove_char(s):
    """Remove the first and last characters from string s."""
    middle = ''
    for char in range(1, len(s) - 1):
        middle += s[char]
    return middle
