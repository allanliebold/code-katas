// Detect Pangram - Check if a string contains all letters of the alphabet at least once

/* Top solution
by marutiborker, Neats29, robbiesharma, ChyGrl

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
*/

function isPangram(string){
  string = string.toLowerCase();
  console.log(string);
  alpha = "abcdefghijklmnopqrstuvwxyz";
  alphaCount = 0;
  
  for (var i = 0; i < alpha.length; i++) {
    if(string.includes(alpha[i])) 
      alphaCount++;
  }

  if(alphaCount == 26) 
    return true;
    
  return false;
}

// Second try

