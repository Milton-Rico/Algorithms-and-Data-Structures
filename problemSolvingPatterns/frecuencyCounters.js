// what we are looking for

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// NAIVE SOLUTION
function same(arr1, arr2) {
  // firtst check if the length is the same
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // find the correct index on arr2 of the square of arr1[i]
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // if the index is -1 then it is not in the array
    if (correctIndex === -1) {
      return false;
    }
    // remove the element from arr2
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// same([2, 2, 5, 1, 3], [4, 25, 1, 9, 4]);

// Refactored
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // loop through the array and add to the frequency counter
  for (let val of arr1) {
    // if the value exists, increment, otherwise set to 1, with ||  we compare the value to undefined, and if it is undefined, we set it to 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1, frequencyCounter2);
  for (let key in frequencyCounter1) {
    // if the square of the key is not in the frequency counter
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // if the value of the square of the key is not the same as the value of the key
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(same1([2, 2, 5, 1, 3], [4, 25, 1, 9, 4]));
