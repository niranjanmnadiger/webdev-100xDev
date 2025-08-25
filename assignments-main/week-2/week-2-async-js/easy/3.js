const fs = require('fs');
const filepath = 'a.txt';

fs.readFile('a.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log("error reading the file");
    return;
  }
  console.log('File content:', data);
});

function expensiveoperation() {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  console.log("Expensive operations result:", sum);
}

expensiveoperation(); // Call it directly
