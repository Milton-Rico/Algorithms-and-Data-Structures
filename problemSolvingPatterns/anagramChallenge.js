function same1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  // sort the strings using split, sort and join, where split turns the string into an array, then sort the array, and then join the array into a string
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1, frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(same1('azaz', 'zaaz'));
