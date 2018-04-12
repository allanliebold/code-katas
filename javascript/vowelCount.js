// Vowel Count - Return the number of vowels in a given string

function getCount(str) {
  var vowelsCount = 0;
  var vowels = 'aeiou';
  
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) 
      vowelsCount += 1;
  }
  
  return vowelsCount;
}
