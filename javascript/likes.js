/* Who Likes It? Implement a function likes :: [String] -> String, which must take in input array, 
containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.

Top Solution by constablebrew:

function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

*/

function likes(names) {
  var firstName = '';
  
  names.length === 0 ? firstName = 'no one' : firstName = names[0];
    
  if (names.length < 2)
    return `${firstName} likes this`;
  
  firstName += ', ';
  var reversed = names.reverse();
  var lastTwo = `${reversed[1]} and ${reversed[0]}`;
  console.log(lastTwo);
  
  if (names.length < 3)
    return `${lastTwo} like this`;
      
  for (var i = 1; i < names.length - 2; i++) {
    firstName += `${names[i]}, `;  
  }
  
  return `${firstName}${lastTwo} like this`;
}
