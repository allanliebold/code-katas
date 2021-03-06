/* Shell Game - 
Given the shell that the ball starts under, and list of swaps, 
return the location of the ball at the end. All shells are indexed by the position they are in at the time.

For example, given the starting position 0 and the swap sequence [(0, 1), (1, 2), (1, 0)]:

The first swap moves the ball from 0 to 1
The second swap moves the ball from 1 to 2
The final swap doesn't affect the position of the ball.

Top solution by Balkoth using reduce:

function find_the_ball(start,swaps) {
  return swaps.reduce(function(ball, swap) {
    if (swap[0] === ball) ball = swap[1];
    else if (swap[1] === ball) ball = swap[0];
    return ball;
  }, start);
}
*/

let find_the_ball = (start,swaps) => {
  let ball = start; 
  for (var i = 0; i < swaps.length; i++) {
    if (swaps[i].includes(ball)) 
      swaps[i][0] == ball ? ball = swaps[i][1] : ball = swaps[i][0];
  }
  return ball;
}
