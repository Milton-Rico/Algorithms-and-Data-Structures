// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
function areThereDuplicates(...args) {
  console.log(args);
  var object = {};
  for (var index of args) {
    object[index] = (object[index] || 0) + 1;
    if (object[index] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd'));
