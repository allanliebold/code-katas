/* Format a String of Names - 
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

Top solution by clementoriol: 

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
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

// Refactor
function list(names){
  var listStr = '';
  
  if(names.length > 0)
    listStr += names[0].name;
  
  if(names.length > 1) {
    for(var i = 1; i < names.length - 1; i++) {
      listStr += `, ${names[i].name}`;
    }
    
    listStr += ` & ${names[names.length - 1].name}`;
  }
  
  return listStr;
}
