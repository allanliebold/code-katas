/* Maximum Subarray Sum - The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an 
array or list of integers. If the array is made up of only negative numbers, return 0. 

Top Solution by itsPG and others:

var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}
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
