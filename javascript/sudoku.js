/* Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 
'Finished!', otherwise return 'Try again!'

*/

function doneOrNot(board){
  for (var i = 0; i < board.length; i++) {
    console.log(board[i].sort());
    if (board[i].sort() !== [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]) {
      return 'Try again!';
    }
  }
  
  return 'Finished!';
}
