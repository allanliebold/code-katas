/* Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 
'Finished!', otherwise return 'Try again!'

Top Solution by cave.on:

function doneOrNot(rows){

  var columns = []
  ,    blocks = [];
  
  for (var i = 0; i < 9; i++) {
    columns[i] = [];
    
    for (var j = 0; j < 9; j++) {
      var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      blocks[k] = blocks[k] || [];
      
      blocks[k].push(rows[i][j]);
      columns[i].push(rows[j][i]);
    }
  }
  
  var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';
  
  var is_valid = rows.every(is_valid_row) 
    && columns.every(is_valid_row) 
    && blocks.every(is_valid_row);
  
  return is_valid ? 'Finished!' : 'Try again!';
}

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
