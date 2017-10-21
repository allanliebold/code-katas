"""Test for Find the stray number."""
import pytest

test_data = [
    ([1, 1, 1, 1, 1, 1, 2], 2),
    ([2, 3, 2, 2, 2], 3),
    ([3, 2, 2, 2, 2], 3),
    ([10, 20, 10, 10, 10], 20),
    ([51, 51, 51, 51, 22, 51], 22),
    ([64, 64, 64, 32, 64, 64, 64], 32)]


@pytest.mark.parametrize('arg,expected', test_data)
def test_find_stray(arg, expected):
    """Test that stray function returns the correct number."""
    from find_stray import stray
    assert stray(arg) == expected

