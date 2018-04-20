// Two to One - Take two strings and return a new string that combines them, sorted, with no repeated characters. 

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
