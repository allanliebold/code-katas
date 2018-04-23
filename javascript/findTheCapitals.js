/* Find the Capitals - Given a string 'word' return an array with the indices of any capital letters

Top solution by jgunchenko: 
var capitals = function (word) {
  return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

Lexical arrow solution by Dirtier: 

const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }

return is actually not required in a lexical arrow function. This solution also doesn't account for duplicate capital
letters, since indexOf will only return the index of the first match. 

*/

var capitals = function (word) {  
  var capArr = [];
  for (var i = 0; i < word.length; i++ ) {
    if(word[i].match(/[A-Z]/g))
      capArr.push(i);
  };
  
  return capArr;
};
