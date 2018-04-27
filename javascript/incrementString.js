/* Increment String - Your job is to write a function which increments a string, to create a new string. 
If the string already ends with a number, the number should be incremented by 1. 
If the string does not end with a number the number 1 should be appended to the new string.

Top Solution by Azuaron:

function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

Solution by Unnamed:

function incrementString(input) {
  return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
      return +d + 1 + ns.replace(/9/g, '0');
    });
}

*/

function incrementString (strng) {
  var begin = ''; 

  for(var i = 0; i < strng.length; i++) {
    if(isNaN(strng[i])) {
      begin += strng[i];
    } else {
      var endNums = strng.slice(i, strng.length);
      break;
    }
  }
  
  var end = (parseInt(endNums) + 1 || 1).toString();
  
  if(endNums) {
      return begin + end.padStart(endNums.length, '0');  
  }
  
  return begin + end;
}
