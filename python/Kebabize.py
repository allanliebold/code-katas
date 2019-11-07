def kebabize(string):
    kebabed = ''
    
    for char in string:
        if char.isupper():
            kebabed += "-" + char.lower()
        elif char.isdigit():
            continue
        else:
            kebabed += char
            
        if kebabed[0] == '-':
            kebabed = kebabed[1:]
    
    return kebabed

"""
Top solutions - 

def kebabize(s):
    return ''.join(c if c.islower() else '-' + c.lower() for c in s if c.isalpha()).strip('-')

-----

import re
def kebabize(s):
    s = ''.join([i for i in s if not i.isdigit()])
    kebablist = filter(None, re.split("([A-Z][^A-Z]*)", s))
    return "-".join(x.lower() for x in kebablist)

"""
def kebabize(s): 
    kebabed = ''

    for char in string:
