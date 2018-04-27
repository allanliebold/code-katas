/* Increment String

*/

function incrementString (strng) {
  var begin = ''; 
  var end = '';

  for(var i = 0; i < strng.length; i++) {
    if(isNaN(strng[i])) {
      begin += strng[i];
    } else {
      end = strng.slice(i, strng.length);
    }
  }
  
  end = (parseInt(end) + 1).toString();
  console.log('begin: ' + begin + ' end: ' + end);
  
  return begin + end;
}
