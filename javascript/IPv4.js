/* Is it IPv4 Address? Basic Regex - 
Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) 
separated by dots.

It should only accept addresses in canonical representation, so no leading 0s, spaces etc.
*/

String.prototype.ipv4Address=function(){
   console.log('127.0.0.1'.match('^\d{1,3}\.\d{1,3}\.d{1,3}\.d{1,3}$'));
   return this.match(/\d{1,3}\.\d{1,3}\.d{1,3}\.d{1,3}/gi);
}
