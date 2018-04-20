/* Replace with Alphabet Position - Given a string, return a string with each letter replaced by its position in the alphabet.
Ignore non-alphabet characters. 
*/

function alphabetPosition(text) {
  var alph = 'abcdefghijklmnopqrstuvwxyz';
  var num = [];
  for (var i = 0; i < text.length; i++) {
    if(alph.includes(text[i].toLowerCase())) {
      num.push(alph.indexOf(text[i].toLowerCase()) + 1);
    }
  }
  return num.join(' ');
}
