/* Autocomplete - The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary 
that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. 

Top Solution by colbydauph:

function autocomplete(input, dictionary){
  var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
  return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
}

This one isn't the most efficient, actually. It has to go through the entire dictionary and then only after does it 
slice the first 5 matches. It makes more sense to just stop when 5 matches have been found. 

Kind of a one line solution by acraileanu, 
but same problem using slice after going through the entire dictionary:

const autocomplete = (input, dictionary) => dictionary.filter(item => item.toLowerCase().indexOf(input.toLowerCase().replace(/[^a-z]/g, "")) == 0).slice(0, 5);
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

/* Some Regex notes. 

*/
