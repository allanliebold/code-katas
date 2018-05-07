/* Maximum Subarray Sum - The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an 
array or list of integers. If the array is made up of only negative numbers, return 0. 

*/

var maxSequence = function(arr){
  var max = 0;

  if (arr.length === 0) {
    return max; 
  }
  
  for (var i = 0; i < arr.length; i++) {
    if (max + arr[i] > 0) {
      max = max + arr[i];
    }
  }
  
  return max; 
}
