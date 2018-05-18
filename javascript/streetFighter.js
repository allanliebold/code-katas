/* Street Fighter II Character Select - You'll have to simulate the video game's character selection screen behaviour.
Input -
the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);

Output -
the list of characters who have been hovered by the selection cursor after all the moves 
(ordered and with repetition, all the ones after a move, whether successful or not, see tests);
*/

function streetFighterSelection(fighters, position, moves){
  var selected = [];
  
  for(var i = 0; i < moves.length; i++) {
    switch(moves[i]) {
      case 'up':
        position[0] = 1;
        break;
      case 'down':
        position[0] = 0;
        break;
      case 'left':
        position[1] === 0 ? position[1] === 5 : position[1]--;
        break;
      case 'right':
        position[1] === 5 ? position[1] === 0 : position[1]++;
        break;
    }
    console.log(position);
    
  }
  return "";
}
