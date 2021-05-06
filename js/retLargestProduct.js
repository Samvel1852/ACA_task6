// Given an array of integers, find the pair of adjacent elements that has the largest product and return that
// product.

function retLargestProduct(inpArr) {
  let resArr = [];
  for (let i = 0; i < inpArr.length; i++) {
    if (i === 0) {
      resArr.push(inpArr[i] * inpArr[i + 1]);
    } else if (i === inpArr[inpArr.length - 1]) {
      resArr.push(inpArr[i] * inpArr[i - 1]);
    } else {
      //   resArr.push(inpArr[i] * inpArr[i - 1]);
      resArr.push(inpArr[i] * inpArr[i + 1]);
    }
  }
  let largest = resArr.sort((a, b) => (a > b ? -1 : 1))[0];
  return largest;
}

console.log(retLargestProduct([1, 2, 3, 7, 1, 8, 7, 1, 2, 4]));
