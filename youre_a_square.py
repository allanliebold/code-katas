"""Kata: You're a Square! - check whether a number is a perfect square.

Best Practices solution by cvk77 and others

from math import sqrt

def is_square(n):
    return n > 0 and sqrt(n).is_integer()

---
Best Practices solution (without importing math) by halex and others

def is_square(n):
    return n>0 and (n**0.5).is_integer()
"""


def is_square(n):
    """Find if n is a perfect square."""
    if n < 0:
        return False
    root = n ** .5
    return root - int(root) == 0
