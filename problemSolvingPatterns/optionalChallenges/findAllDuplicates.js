// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1

function findAllDuplicates(arr) {
  let left = 0;
  let duplicate = [];
  const seen = {};

  while (left < arr.length) {
    //This seen obj keeps track of what numbers have been seen
    if (seen[arr[left]]) {
      duplicate.push(arr[left]);
      console.log(duplicate);
    } else {
      seen[arr[left]] = true;
      console.log(seen);
    }
    left++;
  }

  return duplicate;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

// Teacher's solution
// function findAllDuplicates(nums) {
//   let ans = [];
//   var s = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     s.has(nums[i]) ? ans.push(nums[i]) : s.add(nums[i])
//   }
//   return ans;
// }
