/* Increment String - Your job is to write a function which increments a string, to create a new string. 
If the string already ends with a number, the number should be incremented by 1. 
If the string does not end with a number the number 1 should be appended to the new string.

*/

function incrementString (strng) {
  var begin = ''; 

  for(var i = 0; i < strng.length; i++) {
    if(isNaN(strng[i])) {
      begin += strng[i];
    } else {
      var endNums = strng.slice(i, strng.length);
      break;
    }
  }
  
  var end = (parseInt(endNums) + 1 || 1).toString();
  
  if(endNums) {
      return begin + end.padStart(endNums.length, '0');  
  }
  
  return begin + end;
}
