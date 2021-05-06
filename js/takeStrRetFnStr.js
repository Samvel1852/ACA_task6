// Write a function redundant that takes in a string str and returns a function that returns str.

function takeStrRetFn(str) {
  return () => str;
}

const f1 = takeStrRetFn("apple");
const f2 = takeStrRetFn("pear");
const f3 = takeStrRetFn("");
console.log(f1(), f2(), f3());
