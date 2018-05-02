/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match 
str2, otherwise returns false.

*/

function scramble(str1, str2) {
  var strArr = str1.split('');
  
  for (var i = 0; i < str2.length; i++) {
    if(!strArr.includes(str2[i])) 
      return false;
      
    strArr.splice(strArr.indexOf(str2[i]), 1);
  }
  
  
  return true;
}
