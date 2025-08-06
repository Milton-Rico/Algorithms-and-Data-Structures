//NAIVE SOLUTION

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  // here we asume that max is -Infinity by default
  var max = -Infinity;
  for (let i = 0; i < arr.length + 1 - num; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//REFACTOR SOLUTION
function maxSubarraySum1(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  //we add the first 3 numbers, and store the sum on maxSum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // we remove the first number and add the next, then we compare and store the max
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    console.log(tempSum);
    console.log(maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
