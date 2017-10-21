"""Test for You're a square."""
import pytest
import random

square_data = [(3, False), (4, True), (12, False), (25, True), (26, False),
               (49, True), (50, False), (64, True), (70, False), (100, True),
               (144, True), (200, False), (225, True), (361, True),
               (400, True), (600, False), (625, True), (-1, False)]


@pytest.mark.parametrize('arg,expected', square_data)
def test_square(arg, expected):
    """Test is_square function.

    n should return True if it is a perfect square, otherwise return False.
    """
    from youre_a_square import is_square
    assert is_square(arg) == expected


def test_random():
    """Test that random squared numbers return True."""
    from youre_a_square import is_square
    for i in range(1, 100):
        r = random.randint(0, 0xfff0)
        assert is_square(r * r) is True
