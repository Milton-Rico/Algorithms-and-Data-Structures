let names = ['John', 'Paul', 'George', 'Ringo'];

names.push('Pete');
console.log(names);
// it will depend where the element is inserted, it will be O(1) or O(n)

// names.pop('Pete');
names.pop(names);
console.log(names);
// it will depend where the element is inserted, it will be O(1) or O(n)

names.shift(names);
console.log(names);
// removes the first element, so it will be O(n)

names.unshift('John');
console.log(names);
// add the first element, so it will be O(n)

const array = names.concat(['John', 'Paul', 'George', 'Ringo']);
console.log(array);
// add a new array, so it will be O(n)

const array2 = names.slice(0, 4);
console.log(array2);
// removes a slice of the array, so it will be O(n)

const array3 = array.splice(4, 7);
console.log(array3);
// extract a slice of the array, so it will be O(n)
