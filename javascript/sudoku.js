/* Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 
'Finished!', otherwise return 'Try again!'

*/

function doneOrNot(board){
  for (var i = 0; i < board.length; i++) {
    console.log(board[i].sort().join(''));
    if (board[i].sort().join('') !== '123456789') {
      return 'Try again!';
    }
  }
  
  for (var j = 0; j < board.length; j++) {
    var col = '';
    for (var k = 0; k < board.length; k++) {
      col += board[j][k];
    }
    
    if(col.split('').sort().join('') !== '123456789') {
      return 'Try again!';
    }
  }
  
  return 'Finished!';
}
