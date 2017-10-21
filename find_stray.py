"""Kata: Find the stray number

Best Practices by cvillian098 and others:

def stray(arr):
    for x in arr:
        if arr.count(x) == 1:
            return x
"""

def stray(arr):
    arr.sort()
    if arr[0] == arr[1]:
        return arr[-1]
    return arr[0]
