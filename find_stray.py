"""Kata: Find the stray number.

You are given an array containing two numbers. One appears several times, the
other appears only once. Return the number that appears once. =

Best Practices by cvillian098 and others:

def stray(arr):
    for x in arr:
        if arr.count(x) == 1:
            return x
"""


def stray(arr):
    """Return the one item in an array that only appears once."""
    arr.sort()
    if arr[0] == arr[1]:
        return arr[-1]
    return arr[0]
