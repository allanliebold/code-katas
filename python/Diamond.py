// Give me a Diamond - Given n, where n is the width of a diamond shape comprised of *, return a string representing the diamond

def diamond(n):
    if n % 2 == 0 or n < 0:
        return None
     
    layer = n / 2
    expected = ""
    
    while layer < n:
        expected += " "
        layer += 1

    return expected
