"""Test for Most digits."""

Test.describe("Basic tests")
Test.assert_equals(find_longest([1, 10, 100]), 100)
Test.assert_equals(find_longest([9000, 8, 800]), 9000)
Test.assert_equals(find_longest([8, 900, 500]), 900)
Test.assert_equals(find_longest([3, 40000, 100]), 40000)
Test.assert_equals(find_longest([1, 200, 100000]), 100000)
