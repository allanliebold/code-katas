"""Kata: The highest profit wins.

Return the highest and lowest values in a list.

Best Practices solution by ZozoFoutra and others:

def min_max(lst):
  return [min(lst), max(lst)]
"""


def min_max(lst):
    """Sort a list of numbers then return the first and last values."""
    lst.sort()
    return [lst[0], lst[-1]]
