"""Test for Find the stray number."""

test.describe("Example Tests")

tests = [
    [[1,1,1,1,1,1,2], 2],
    [[2,3,2,2,2], 3],
    [[3,2,2,2,2], 3],
]


for inp, exp in tests:
    test.assert_equals(stray(inp), exp)
