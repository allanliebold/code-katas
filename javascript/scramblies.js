/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match 
str2, otherwise returns false.

*/

function scramble(str1, str2) {
  var strArr = [];
  
  for (var i = 0; i < str2.length; i++) {
    if(!str1.includes(str2[i])) 
      return false;
      
    var charIdx = str1.indexOf(str2[i]);
    str = str1.split('');
    str.splice(charIdx, 1);
  }
  
  
  return true;
}
