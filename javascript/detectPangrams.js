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
