def diamond(n):
    if n % 2 == 0 or n < 0:
        return None
     
    layer = n
    expected = ""
    
    while layer > 0:
        expected += " "
        layer--

    return expected
