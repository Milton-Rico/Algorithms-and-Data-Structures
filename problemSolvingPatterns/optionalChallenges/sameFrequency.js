// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) {
    return false;
  }
  num1 = num1.toString().split('').sort().join('');
  num2 = num2.toString().split('').sort().join('');
  if (num1 !== num2) {
    return false;
  }
  return true;
}

console.log(sameFrequency(22, 222));
