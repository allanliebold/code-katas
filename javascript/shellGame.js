/* Shell Game - 
Given the shell that the ball starts under, and list of swaps, 
return the location of the ball at the end. All shells are indexed by the position they are in at the time.

For example, given the starting position 0 and the swap sequence [(0, 1), (1, 2), (1, 0)]:

The first swap moves the ball from 0 to 1
The second swap moves the ball from 1 to 2
The final swap doesn't affect the position of the ball.

*/

find_the_ball = function(start,swaps){
  var ball = start; 
  for (var i = 0; i < swaps.length; i++) {
    if (swaps[i][0] == ball) {
      ball = swaps[i][1];
    } else if (swaps[i][1] == ball) {
      ball = swaps[i][0];
    }
  }
  
  return ball;
}
