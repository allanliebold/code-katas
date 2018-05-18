/* Array.diff - Implement a difference function. Given arrays a and b, remove any elements from a that are in b and return a. 
*/

function array_diff(a, b) {
  return a.filter(num => !b.includes(num));
}
