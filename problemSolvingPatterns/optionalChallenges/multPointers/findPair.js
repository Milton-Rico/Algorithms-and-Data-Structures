// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true
// findPair([1,2,3], 0) // false

function findPair(arr, num) {
  if (arr.length === 0) return false;
  var i = 0;
  var j = 1;
  while (i < arr.length) {
    console.log(arr[i], arr[j]);
    if (arr[i] - arr[j] === num || arr[j] - arr[i] === num) {
      return true;
    } else if (j < arr.length - 1) {
      j++;
    } else {
      i++;
      j = i + 1;
    }
  }
  return false;
}
console.log(findPair([1, 2, 3], 0));

// Teachers solution
// O(n) space + O(n) time
function findPair(arr, n) {
  // if n is 0, we just need to see if there's any duplicate in the array
  if (n === 0) {
    const seen = new Set();
    for (let num of arr) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }

  // for non-zero n, place all elements in a set
  const setVals = new Set(arr);

  // check for val + n or val - n in the set
  for (let val of arr) {
    if (setVals.has(val + n) || setVals.has(val - n)) {
      return true;
    }
  }

  return false;
}

// O(1) space + O(n log n) time
function findPair(arr, num) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
      return true;
    } else if (arr[j] - arr[i] < num) {
      j++;
    } else {
      i++;
    }
  }
  return false;
}
