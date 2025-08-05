function upAndDown(n) {
  console.log('up');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('Reach the top');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('down');
}

upAndDown(10);
