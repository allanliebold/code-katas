"""Test for Remove First and Last Character."""

Test.describe("Tests")
Test.assert_equals(remove_char('eloquent'), 'loquen')
Test.assert_equals(remove_char('country'), 'ountr')
Test.assert_equals(remove_char('person'), 'erso')
Test.assert_equals(remove_char('place'), 'lac')
Test.assert_equals(remove_char('ok'), '')
