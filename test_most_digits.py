"""Test for Most digits."""
import pytest

test_data = [([1, 10, 100], 100),
             ([9000, 8, 800], 9000),
             ([8, 900, 500], 900),
             ([3, 40000, 100], 40000),
             ([1, 200, 100000], 100000),
             ([324, 125, 5999, 100, 4], 5999),
             ([1.5, 25, 3.99, 4, 2.8], 3.99),
             ([0.1, 10], 0.1),
             (['ABC', 'CBA', 'ABCBA', 'CBABCD', 'DBCA'], 'CBABCD')]


@pytest.mark.parametrize('arg,expected', test_data)
def test_most_digits(arg, expected):
    """Test most_digits returns the correct number."""
    from most_digits import find_longest
    assert find_longest(arg) == expected


def test_attribute_error():
    """Raise a TypeError if a single int is passed."""
    from most_digits import find_longest
    with pytest.raises(TypeError):
        find_longest(1)
