// Create a function that implements partial sum

function outerFn(outNum) {
  function innerFn(inNum) {
    return outNum + inNum;
  }
  return innerFn;
}

const addOne = outerFn(1);
console.log(addOne(2));
const addTen = outerFn(10);
console.log(addTen(2), addOne(4), addTen(10));
// console.log(outerFn(2)(1));
