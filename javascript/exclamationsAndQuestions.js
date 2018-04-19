/* Exclamation Marks Series #13 - Given a string, count the number of exclamation marks and question marks and return the
product of the two counts. 

*/

function product(s){
  var ex = 0;
  var qu = 0;
  
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '!') 
      ex += 1;
    
    if (s[i] === '?')
      qu += 1;
  }
  
  return ex * qu;
}
