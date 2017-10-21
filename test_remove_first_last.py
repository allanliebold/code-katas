"""Test for Remove First and Last Character."""
import pytest

test_data = [('eloquent', 'loquen'),
             ('country', 'ountr'),
             ('person', 'erso'),
             ('place', 'lac'),
             ('ok', ''),
             ('coffee', 'offe'),
             ('orangutan', 'ranguta'),
             ('ampersand', 'mpersan'),
             ('12345', '234'),
             ('one two', 'ne tw')]


@pytest.mark.parametrize('arg,expected', test_data)
def test_remove_first_last(arg, expected):
    """Test that the remove_char function returns correct string."""
    from remove_first_last import remove_char
    assert remove_char(arg) == expected


def test_type_error():
    """Passing a number raises a TypeError."""
    from remove_first_last import remove_char
    with pytest.raises(TypeError):
        remove_char(10)
