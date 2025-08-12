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

// Teachers solution Frecuency Counters
// function areThereDuplicates() {
//   let collection = {}
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for (let key in collection) {
//     if (collection[key] > 1) return true
//   }
//   return false;
// }

// Teachers solution Multiple Pointers
// function areThereDuplicates(...args) {
//   args.sort((a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
//   });

//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// Teachers solution One Liner Solution
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }
