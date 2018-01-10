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
