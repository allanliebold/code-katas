/* Find the Capitals - Given a string 'word' return an array with the indices of any capital letters

*/

var capitals = function (word) {  
  var capArr = [];
  for (var i = 0; i < word.length; i++ ) {
    if(word[i].match(/[A-Z]/g))
      capArr.push(i);
  };
  
  return capArr;
};
