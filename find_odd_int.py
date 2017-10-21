"""Kata: Find the odd int

Best Practices by cerealdinner:

def find_it(seq):
    for i in seq:
        if seq.count(i)%2!=0:
            return i
"""

def find_it(seq):
    nums = []
    for i in seq:
        if i not in nums:
            nums.append(i)
        else:
            nums.remove(i)
    return nums[0]
