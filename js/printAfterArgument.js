// Create a function printAfter that calls its argument after printing hello world

function printAfter(inpFn) {
  console.log("Hello world");
  inpFn();
}

const print = () => console.log("Elon Musk");
printAfter(print);
