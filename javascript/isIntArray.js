/* Is Integer Array? Return true if array is empty or includes only integers. Otherwise, return false. 

Top solution by jrpeasee, jacobb, sqet, codewars@rueif.com, IGRACH, ramsaylanier, and others

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}

*/

function isIntArray(arr) {
  if (arr === []) {
    return true;
    
  return false;  
}
