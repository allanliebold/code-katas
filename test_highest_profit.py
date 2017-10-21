"""Test for The highest profit wins."""
import pytest

test_data = [([1, 2, 3, 4, 5], [1, 5]),
             ([2334454, 5], [5, 2334454]),
             ([8, 4, 3, 20, 50, 9], [3, 50]),
             ([10000, 0, 20, -3, 50], [-3, 10000]),
             ([-5, -20, -400, -2, -40], [-400, -2]),
             (['B', 'D', 'A', 'C'], ['A', 'D'])]


@pytest.mark.parametrize('arg,expected', test_data)
def test_highest_profit(arg, expected):
    """Test that highest and lowest numbers are returned."""
    from highest_profit import min_max
    assert min_max(arg) == expected


def test_attribute_error():
    """If argument is not a list, raise an AttributeError."""
    from highest_profit import min_max
    with pytest.raises(AttributeError):
        min_max(1)
