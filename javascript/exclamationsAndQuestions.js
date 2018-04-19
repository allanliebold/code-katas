/* Exclamation Marks Series #13 - Given a string, count the number of exclamation marks and question marks and return the
product of the two counts. 

Top solution by narayanswa30663

function product(s){
  excs = s.split('!').length - 1
  ques = s.split('?').length - 1
  return excs * ques
}

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
