/* Exclamation Marks Series #13 - Given a string, count the number of exclamation marks and question marks and return the
product of the two counts. 

Top solution by narayanswa30663

function product(s){
  excs = s.split('!').length - 1
  ques = s.split('?').length - 1
  return excs * ques
}

narayanswa30663's explanation: 

So basically if we have a string like "Hello! Hello! Hello! Hello", and we want to count the number of exclamation marks, 
we would do something like this.

var x = "Hello! Hello! Hello! Hello".split("!")
// x is now ["Hello", " Hello", " Hello", " Hello"]
// but see that there are four strings in the array x, and only three exclamation marks in the original string

var exclamations = x.length - 1
// exclamations = 4 - 1 = 3

Regex solution by wisyr

function product(s){
  return (s.match(/!/g) == null || s.match(/\?/g) == null) ? 0 : s.match(/!/g).length * s.match(/\?/g).length;
}

Suggestion by Voile: 
A simpler way to get around zero matches returning null is to use || cleverly:

(s.match(/!/g) || []).length
If s has any matches, the first returns an array and so it's evaluated to true, and returned because || short-circuits. 
Otherwise the first return null which is evaluated to false, so an empty array is returned instead.

*/

function product(s){
  var ex = 0;
  var qu = 0;
  
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '!') 
      ex += 1;
    
    if (s[i] === '?')
      qu += 1;
  }
  
  return ex * qu;
}
