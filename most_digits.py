"""Kata: Find the most digits
Best Practices by Unnamed and others:

def find_longest(xs):
    return max(xs, key=lambda x: len(str(x)))
"""

def find_longest(arr):
    longest_idx = 0
    for i in range(1, len(arr)):
        current = str(arr[i])
        longest = str(arr[longest_idx])
        if len(current) > len(longest):
            longest_idx = i
        
    return arr[longest_idx]
        
