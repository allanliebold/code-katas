
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
