console.log("Hello World");

function time() {
  console.log("Time is up");
}

console.log("Start");

setTimeout(time, 1000);

let c = 0;
for (let i = 0; i < 10000000000; i++) {
  c = c + i;
}
console.log("End");