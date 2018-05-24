/* If you can read this...
Create a function to translate a string to Pilot's alphabet (NATO phonetic alphabet)

Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, 
Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, 
Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu.

Input: Hello
Output: Hotel Echo Lima Lima Oscar
*/

function to_nato(words) {
  var nato = words.split('').map(char => {
    if('?!.'.includes(char))
      return char;
    return char;
  });
  
  console.log(nato);
}
