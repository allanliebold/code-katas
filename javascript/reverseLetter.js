// Reverse Letter - Given a string, return it reversed and omitting any non-alphabet characters

/* Top solutions by Roman93, juansgaitan, and others, 

reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

function reverseLetter(str) {
  return str.split('')
            .reverse()
            .filter(val => /[a-zA-Z]/.test(val))
            .join('');  
}

*/

function reverseLetter(str) {
  var reverseStr = '';
  
  for (var i = str.length - 1; i > -1; i--) {
    if (str[i].match(/[a-z]/)) {
      reverseStr += str[i];
    }
  }
  return reverseStr;  
}
