/* Break Camel Case - Make a function that will break up camel casing, adding a space between words. 

*/ 

var solution = string => string.split('').map(char => char.match(/[A-Z]/) ? ' ' + char : char).join('');
