// Reverse Letter - Given a string, return it reversed and omitting any non-alphabet characters

function reverseLetter(str) {
  var reverseStr = '';
  
  for (var i = str.length - 1; i > -1; i--) {
    if (str[i].match(/[a-z]/)) {
      reverseStr += str[i];
    }
  }
  return reverseStr;  
}
