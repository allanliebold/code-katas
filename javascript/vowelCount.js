// Vowel Count - Return the number of vowels (a, e, i, o, u) in a given string

/* Top solution by Balkoth and others
  
function getCount(str) {
  return (str.mathc(/[aeiou]/ig)||[]).length; 
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
