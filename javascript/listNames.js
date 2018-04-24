/* List Names - Given a hashed array of names, return the names in a string with the following format: Name1, Name2 & Name3

Top Solution by ooflorent:

function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

*/

function list(names){
  var listStr = '';
  
  if(names.length > 0)
    listStr += names[0].name;
  
  if(names.length > 1) {
    for(var i = 1; i < names.length - 1; i++) {
      listStr += ', ' + names[i].name;
    }
    
    listStr += ' & ' + names[names.length - 1].name;
  }
  
  return listStr;
}
