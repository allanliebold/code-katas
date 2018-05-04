/* Linked Lists, Length & Count - Implement Length() to return the number of nodes in a linked list and Count() to return
the number of instances of a number in the list. 

*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  var nodes = 0;
  while (this.next != null) {
    nodes++; 
    length(this.data);
  }  
  nodes++;
  return nodes; 
}

function count(head, data) {
  
}
