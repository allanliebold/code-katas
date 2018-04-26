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

Alternate solution with better time complexity:

const findEvenIndex1 = (arr) => {
   let post = arr.reduce((a, b) => a + b, 0);
   let pre = 0;
   let nextPre = 0;
   let i = 0;
   const length = arr.length;
   while (pre !== post && i < length) {
     post -= arr[i];
     pre = nextPre;
     nextPre += arr[i];
     i++;
   }
   if (i === length) return -1;
   return i - 1;  
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
