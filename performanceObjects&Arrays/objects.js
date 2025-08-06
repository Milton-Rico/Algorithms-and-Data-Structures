let instructior = {
  name: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

console.log(Object.keys(instructior));
// It will print all the keys, so in big notation it will be O(n)

console.log(Object.values(instructior));
// It will print all the values, so in big notation it will be O(n)

console.log(Object.entries(instructior));
// It will print all the keys and values into an array, so in big notation it will be O(n)

console.log(instructior.hasOwnProperty('name'));
// It will print true or false, so in big notation it will be O(1)
