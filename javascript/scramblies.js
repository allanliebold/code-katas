/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match 
str2, otherwise returns false.

Top Solution by niralpokal:

function scramble(str1, str2) {
  var map={};
  for(var i in str1) {
    map[str1[i]] ? map[str1[i]]++ : map[str1[i]]=1;
  }
  for(var i in str2) {
    if(!map[str2[i]]) return false;
    map[str2[i]]--;
  }
  return true;
}
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
// This solution passes tests, but times out running the full test suite. 
