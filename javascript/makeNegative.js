/* Make Negative. Given a number, return it as negative. It may already be negative. 0 cannot be made negative.

Top solution by colbydaugh and others

function makeNegative(num) {
  return -Math.abs(num);
}

*/

function makeNegative(num) {
  return (num <= 0 ? num : num - num * 2);
}
