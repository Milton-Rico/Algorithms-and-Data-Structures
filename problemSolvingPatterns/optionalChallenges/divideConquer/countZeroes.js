// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

function countZeroes(array) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];
    console.log(min, max, middle);

    if (currentElement === 1) {
      min = middle + 1;
    } else if (currentElement === 0 && array[middle - 1] === 1) {
      return array.length - middle;
    } else {
      max = middle - 1;
    }
  }
  console.log(min);
  if (min === array.length) return 0;
  return array.length;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0]));
console.log(countZeroes([1, 0, 0, 0, 0]));
console.log(countZeroes([0, 0, 0]));
console.log(countZeroes([1, 1, 1, 1]));

// Teacher's solution
// function countZeroes(arr) {
//   // add whatever parameters you deem necessary - good luck!
//   let firstZero = findFirst(arr)
//   if (firstZero === -1) return 0;

//   return arr.length - firstZero
// }

// function findFirst(arr, low = 0, high = arr.length - 1) {
//   if (high >= low) {
//     let mid = low + Math.floor((high - low) / 2)
//     if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
//       return mid;
//     } else if (arr[mid] === 1) {
//       return findFirst(arr, mid + 1, high)
//     }
//     return findFirst(arr, low, mid - 1)
//   }
//   return -1;
// }
