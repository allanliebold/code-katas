/* Autocomplete - The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary 
that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. 

*/

function autocomplete(input, dictionary){
  var matches = dictionary.map(el => {
    if(el.startsWith(input));
      return el;
    });
  console.log(matches);
}