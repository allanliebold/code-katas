/* Replace with Alphabet Position - Given a string, return a string with each letter replaced by its position in the alphabet.
Ignore non-alphabet characters. 

Top solution by jimmy-ringo:

const alphabetPosition = (text) => text.replace(/[^a-zA-Z]/g,'')
                                       .split('').map(e => e.charCodeAt(0) - (e === e.toLowerCase() ? 96 : 64))
                                       .join(' ');
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
