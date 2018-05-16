/* Autocomplete - The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary 
that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. 

*/

function autocomplete(input, dictionary){
  var matches = []; 
  input = input.replace(/[^a-zA-Z]/g, '');
  
  for(var i = 0; i < dictionary.length; i++) {
    if(matches.length === 5)
      break;
    if(dictionary[i].toLowerCase().startsWith(input)) {
      matches.push(dictionary[i]);
    }
  }
  return matches;
}
