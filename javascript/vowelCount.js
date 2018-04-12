// Vowel Count - Return the number of vowels (a, e, i, o, u) in a given string

/* Top solution by Balkoth and others
  
function getCount(str) {
  return (str.mathc(/[aeiou]/ig)||[]).length; 
}

Useful comment, also by Balkoth, explaining ||[] :  
The match method returns null when it does not find a match, so if you try to call .length on that result, it will cause a TypeError.
null to evaluate to false, so null||[] equals [].

This allows a much shorter solution than the following equivalent:

var vowels = str.match(/[aeiou]/ig);
if (vowels === null) {
  return 0;
} else {
  return vowels.length;
}

*/

function getCount(str) {
  var vowelsCount = 0;
  var vowels = 'aeiou';
  
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) 
      vowelsCount += 1;
  }
  
  return vowelsCount;
}
