// Find the Odd Int - Given an array of integers, return the one that appears an odd number of times. 

/* Top solution by harms280 and others

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

*/

function findOdd(A) {
  A.sort();
  var count = 0;
  var curr = A[0]; 
  
  for (var i = 0; i < A.length; i++) {
    if (curr != A[i]) {
      if (count % 2 != 0) {
        break;
      }
      count = 0; 
    }
    
    curr = A[i];
    count += 1;
  }
  
  return curr;
}
