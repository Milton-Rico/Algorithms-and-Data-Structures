//UNDERSTAND THE PROBLEM

//1.  Can I restate the problem in my own words?
//2.  What are the inputs that go into the problem?
// ints
// floats
// string of numbers
//3.  What are the outputs that should come from the solution to the problem?
// a number, a string or a float?

//4.  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
//5.  How should I label the important pieces of data that are a part of the problem?

function sumOf2Numbers(a, b) {
  return a + b;
}

console.log(sumOf2Numbers(5, 8));

//EXPLORE EXAMPLES
// 1. Start with Simple Examples
// charCount('aaaa'); { a: 4 }
// 2. Progress to More Complex Examples
// charCount('hello'); { h: 1, e: 1, l: 2, o: 1 }
// do we want to ignore spaces?, punctuation?, symbols?, uppercase letters?
// 3. Explore Examples with Empty Inputs
// charCount('');
// 4. Explore Examples with Invalid Inputs

function charCount(str) {
  var result = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return console.log(result);
}
// charCount('hello this es 1 2 3');

//BREAK IT DOWN
// Explicitly write out the steps you need to take.

// This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

//
function charCount(str) {
  // create an object
  // loop through string, for each char
  // if char is a number/letter, and exists in obj, add 1
  // if char is a number/letter, and doesn't exist in obj, add it to obj with value of 1
  // if the char is a space, do nothing
  // return obj
}

// SIMPLIFY

//1.  Find the core difficulty in what you're trying to do
//2.  Temporarily ignore that difficulty
//3.  Write a simplified solution
//4.  Then incorporate that difficulty back in

// REFACTORING QUESTIONS
// 1. Can you check the result?
// 2. Can you derive the result differently?
// 3. Can you understand it at a glance?
// 4. Can you use the result or method for some other problem?
// 5. Can you improve the performance of your solution?
// 6. Can you think of other ways to refactor?
// 7. How have other people solved this problem?

// One solution to refactor
// function charCount2(str) {
//   var result = {};
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if (/a-z0-9/.test(char)) {
//       if (result[char]) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//     return console.log(result);
//   }
// }
// charCount2('hello this es 1 2 3');

// Another solution to refactor
// function charCount2(str) {
//   var result = {};
//   for (var char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   console.log(result);
//   return result;
// }
// charCount2('hello this es 1 2 3');

// function charCount2(str) {
//   var result = {};
//   for (var char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       result[char] = result[char] + 1 || 1;
//     }
//   }
//   console.log(result);
//   return result;
// }
// charCount2('hello this es 1 2 3');

function charCount2(str) {
  var result = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (isAlfanumeric(char)) {
      result[char] = result[char] + 1 || 1;
    }
  }
  console.log(result);
  return result;
}

function isAlfanumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

charCount2('hello this es 1 2 3');
