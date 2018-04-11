// Exes and Ohs. Given a string, count the number of x and o characters. Return true if they are equal or false if not. 
// This function should be case insensitive. 

/* Top solution by Downfall and others 

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

*/

function XO(str) {
  var exes = 0; 
  var ohs = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (char === 'x' || char === 'o') 
      char === 'x' ? exes += 1 : ohs += 1;
  }
  return (exes === ohs ? true : false);
}
