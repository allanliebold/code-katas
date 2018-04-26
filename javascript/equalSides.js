/* Equal Sides of an Array - Given an array of integers, return the index where the sum of every integer to the left is equal
to the sum of every integer to the right. Return -1 if this is not possible. 

*/

function getSum(sum, num) {
  return sum += num;  
}

function findEvenIndex(arr) {
  
  if (arr.length > 2) {
    for (var i = 0; i < arr.length; i++) {
      left = arr.slice(0, i);
      right = arr.slice(i+1);
      
      if (left.reduce(getSum, 0) === right.reduce(getSum, 0))
        return i;
    }
  }
  
  return -1;
}
