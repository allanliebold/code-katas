"""Kata: The highest profit wins!
Best Practices solution by ZozoFoutra and others: 

def min_max(lst):
  return [min(lst), max(lst)]
"""

def min_max(lst):
  lst.sort()
  return [lst[0], lst[-1]]
