/* Break Camel Case - Make a function that will break up camel casing, adding a space between words. 

Top solution - 
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}

I went overboard on this one. Replace is a much simpler solution. 
*/ 

let solution = string => string.split('').map(char => char.match(/[A-Z]/) ? ' ' + char : char).join('');

// Refactor

let solution = string => string.replace(/[A-Z]/g, ' $1');
