/* Equal Sides of an Array - Given an array of integers, return the index where the sum of every integer to the left is equal
to the sum of every integer to the right. Return -1 if this is not possible. 

Top Solution by okedoke80:

function findEvenIndex(arr)
{
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}

*/

function getSum(sum, num) {
  return sum += num;  
}

function findEvenIndex(arr) {
  
  if (arr.length > 2) {
    for (var i = 0; i < arr.length; i++) {      
      if (arr.slice(0, i).reduce(getSum, 0) === arr.slice(i+1).reduce(getSum, 0))
        return i;
    }
  }
  
  return -1;
}
