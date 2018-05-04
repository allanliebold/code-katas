/* Linked Lists, Length & Count - Implement Length() to return the number of nodes in a linked list and Count() to return
the number of instances of a number in the list. 

Top Solution by ooflorent:

function Node(data) {
  this.data = data
  this.next = null
}

function length(head) {
  return head ? 1 + length(head.next) : 0
}

function count(head, data) {
  if (!head) return 0
  return (head.data === data ? 1 : 0) + count(head.next, data)
}

*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  var nodes = 0;
  if(this) {
    nodes++
    if (this.next != null) {
      nodes += length(this.data);
    }  
  }
  
  return nodes; 
}

function count(head, data) {
  var counter = 0;
  if (this.data == data) {
    counter++;
  }
  
  if (this.next != null) {
    count += count(this.next, data);
  }
  
  return counter;
}
