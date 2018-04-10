/* Get the Middle Character - Given a string, return the middle character if its length is odd, 
return the middle two characters if its length is even. 
*/

// First solution 
function getMiddle(s) {
  if (s.length % 2 === 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];  
  } else {
    return s[Math.floor(s.length / 2)];
  }
}

// Refactored solution using ternary
function getMiddle(s) {
  return (s.length % 2 === 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[Math.floor(s.length / 2)]); 
}
