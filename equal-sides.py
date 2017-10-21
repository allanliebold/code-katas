"""Kata: Equal sides of an array

Best Practices by CrazyMerlyn and others: 
def find_even_index(arr):
    for i in range(len(arr)):
        if sum(arr[:i]) == sum(arr[i+1:]):
            return i
    return -1
"""

def find_even_index(arr):
    for i in range(len(arr)):
        if sum(arr[:i+1]) == sum(arr[i:]):
            return i
    return -1

# I accidentally swapped where the +1 should go on line 13, but the tests passed anyway. 
