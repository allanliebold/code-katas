// Give me a Diamond - Given n, where n is the width of a diamond shape comprised of *, return a string representing the diamond

def diamond(n):
    if n % 2 == 0 or n < 0:
        return None
     
    middle = "*" * n
    middle += "\n"
    
    x = n - 2
    space = 1
    bottom = ""
    
    while x > 0:        
        bottom += " " * space
        bottom += "*" * x
        bottom += "\n"
        
        x -= 2
        space += 1
    
    top = bottom
    
    return top + middle + bottom
