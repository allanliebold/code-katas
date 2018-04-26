/* Equal Sides of an Array - Given an array of integers, return the index where the sum of every integer to the left is equal
to the sum of every integer to the right. Return -1 if this is not possible. 

*/

function findEvenIndex(arr) {
  for (var i = 0; i < arr.length; i++) {
    var left = arr.slice(0, i);
    var right = arr.slice(i+1);
  }
  
  return -1;
}
