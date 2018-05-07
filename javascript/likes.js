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
  if (names.length === 0)
    return 'no one likes this'
    
  if (names.length === 1)
    return `${names[0]} likes this`;
  
  if (names.length === 2)
    return `${names[0]} and ${names[1]} like this`;
  
  var str = '';
  
  for (var i = 0; i < names.length - 2; i++) {
    str += `${names[i]}, `;  
  }
  
  return `${str} ${names[i + 1]} and ${names[i + 2]} like this`;
}
