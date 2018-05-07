/* Who Likes It? Implement a function likes :: [String] -> String, which must take in input array, 
containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.

*/

function likes(names) {
  var firstName = '';
  
  names.length === 0 ? firstName = 'no one' : firstName = names[0];
    
  if (names.length < 2)
    return `${firstName} likes this`;
  
  firstName = '';
  var reversed = names.reverse();
  var lastTwo = `${reversed[1]} and ${reversed[0]}`;
  console.log(lastTwo);
      
  for (var i = 0; i < names.length - 2; i++) {
    firstName += `${names[i]}, `;  
  }
  
  return `${firstName} ${lastTwo} like this`;
}
