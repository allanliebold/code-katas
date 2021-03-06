/* Two to One - Take two strings and return a new string that combines them, sorted, with no repeated characters. 

Top solution by Balkoth:

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

... is the spread operator, which splits an iterable into its values, separated by commas. 
arr1 = [1,2,3]
arr2 = [4,5,6]
arr3 = [...arr1, ...arr2] // [1,2,3,4,5,6]
a = Math.max(...arr3) // 6
Without the spread operator, arr3 would be [[1,2,3], [4,5,6]]

Set stores only unique data. 

Regex solution by pavel.azanov:

function longest(s1, s2) {
  return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}

*/

function longest(s1, s2) {
  var combined = (s1 + s2).split('').sort();
  var s3 = '';
  
  for (var i = 0; i < combined.length; i++) {
    console.log(combined[i]);
    if (!s3.includes(combined[i])) 
      s3 += combined[i];
  }
  
  return s3;
}
