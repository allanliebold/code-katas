"""Test for Find the odd int."""
import pytest

test_data = [([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5),
             ([50, 25, 60, 25, 50], 60),
             ([100, 1, 1, 20, 1, 20, 100, 20, 1], 20),
             (['this', 'that', 'other', 'that', 'this'], 'other'),
             # It works on strings too, apparently. I'm okay with that.
             ([9, 99, 999, 99, 9, 999, 9999, 9999, 99, 99, 99], 99),
             # Also not actually limited to integers.
             ([1.5, 2.3, 3.4, 1.5, 3.4], 2.3)]


@pytest.mark.parametrize('arg,expected', test_data)
def test_find_odd(arg, expected):
    """Test find_it function returns the correct int."""
    from find_odd_int import find_it
    assert find_it(arg) == expected


def test_index_error():
    """If no odd number of ints exist, raise an IndexError."""
    from find_odd_int import find_it
    with pytest.raises(IndexError):
        find_it([1, 1, 2, 2])
