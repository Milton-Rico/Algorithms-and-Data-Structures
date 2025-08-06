function same1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  // sort the strings using split, sort and join, where split turns the string into an array, then sort the array, and then join the array into a string
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  if (str1 !== str2) {
    return false;
  }
  console.log(str1, str2);
  return true;
}
console.log(same1('rat', 'car'));

// Teachers solution
// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   console.log(lookup)

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')
