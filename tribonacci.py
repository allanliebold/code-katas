"""Kata: Tribonacci Sequence.

return a list of n numbers in a Fibonacci-like sequence.
Instead of adding every two numbers to get the third, add every
three to get the fourth.

Best Practices solution by Azuaron and others:

def tribonacci(signature, n):
  res = signature[:n]
  for i in range(n - 3): res.append(sum(res[-3:]))
  return res
"""


def tribonacci(signature, n):
    """Return all numbers in the sequence up to and including the nth."""
    if n == 0:
        return []
    if n == 1:
        return [signature[0]]
    sequence = signature
    a, b, c = sequence[0], sequence[1], sequence[2]
    d = a + b + c
    for i in range(1, n - 2):
        sequence.append(d)
        a, b, c = b, c, d
        d = a + b + c
    return sequence
