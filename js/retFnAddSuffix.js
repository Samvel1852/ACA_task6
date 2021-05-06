// Write a function that returns an anonymous function, which transforms its input by adding a particular
// suffix at the end.

function addSuffix(suffix) {
  return (word) => word + suffix;
}

const addLy = addSuffix("ly");
console.log(addLy("total"));

const addLess = addSuffix("less");
console.log(addLess("ruth"));
