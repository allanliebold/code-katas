/* If you can read this...
Create a function to translate a string to Pilot's alphabet (NATO phonetic alphabet)

Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, 
Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, 
Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.

Input: Hello
Output: Hotel Echo Lima Lima Oscar

Top solution by asmgf

function to_nato(words) {
  return words.split('').filter(c => c !== ' ').map(c => table[c.toUpperCase()] || c).join(' ');
}
*/

function to_nato(words) {
  const natoAlpha = {'a': 'Alfa', 'b': 'Bravo', 'c': 'Charlie', 'd': 'Delta', 
    'e': 'Echo', 'f': 'Foxtrot', 'g': 'Golf', 'h': 'Hotel', 'i': 'India', 
    'j': 'Juliett', 'k': 'Kilo', 'l': 'Lima', 'm': 'Mike', 'n': 'November', 
    'o': 'Oscar', 'p': 'Papa', 'q': 'Quebec', 'r': 'Romeo', 's':  'Sierra', 
    't': 'Tango', 'u': 'Uniform', 'v': 'Victor', 'w': 'Whiskey', 'x': 'Xray', 
    'y': 'Yankee', 'z': 'Zulu'};
  var words = words.split(' ').join('');
  var nato = words.split('').map(char => {
    if('?!.'.includes(char))
      return char;
    return natoAlpha[char.toLowerCase()];
    ;
  });
  return nato.join(' ');
}
