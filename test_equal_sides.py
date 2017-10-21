"""Test for Equal Sides of An Array."""
import pytest

test_data = [([1, 2, 3, 4, 3, 2, 1], 3),
             ([1, 100, 50, -51, 1, 1], 1),
             ([1, 2, 3, 4, 5, 6], -1),
             ([20, 10, 30, 10, 10, 15, 35], 3),
             ([20, 10, -80, 10, 10, 15, 35], 0),
             ([range(1, 100), -1]),
             ([0, 0, 0, 0], 0),
             ([-1, -2, -3, -4, -3, -2, -1], 3),
             ([range(-100, -1), -1]),
             ([3, 4, 1, 2, 5], 2),
             ([20, 25, 30, 1, 9, 6, 40, 10, 20], 4),
             ([1000, -500, 25, 25, 2000, -1050], 1),
             ([0, 1, 1, 2, 3, 5, 8, 13, 20], 7)
             ]


@pytest.mark.parametrize('arg,expected', test_data)
def test_find_even(arg, expected):
    """Test passed list returns correct index."""
    from equal_sides import find_even_index
    assert find_even_index(arg) == expected


def test_type_error():
    """Passing a string should raise a TypeError."""
    from equal_sides import find_even_index
    with pytest.raises(TypeError):
        find_even_index('string')
