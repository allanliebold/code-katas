/* Array.diff - Implement a difference function. Given arrays a and b, remove any elements from a that are in b and return a. 

Top solution by yrara and others:

function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

I actually managed to come up with one of the other top solutions on my own though. 
At first I did a forEach loop and just pushed anything not in b into another final array and returned that,
but then I refactored. Finally recognized a good use case for filter.
*/

function array_diff(a, b) {
  return a.filter(num => !b.includes(num));
}
