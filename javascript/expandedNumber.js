/* Number Expanded Form - You will be given a number and you will need to return it as a string in Expanded Form. 

For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

*/

function expandedForm(num) {
  var numStr = num.toString();
  var finalStr = '';
  
  for(var i = 0; i < numStr.length; i++) {
    var zeroes = numStr.length - (i + 1);
  }
}
