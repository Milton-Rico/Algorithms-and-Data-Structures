// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = 0;
  let subTotal = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  subTotal = max;
  for (let i = num; i < arr.length; i++) {
    subTotal = subTotal + arr[i] - arr[i - num];
    max = Math.max(max, subTotal);
  }
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
