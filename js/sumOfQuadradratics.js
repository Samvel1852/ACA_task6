// Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

function sumOfQuadratics(inpArr) {
  let resSum = 0;
  for (let item in inpArr) {
    if (inpArr[item] ** 2 % 2 === 0) {
      resSum += inpArr[item];
    }
  }
  return resSum;
}

console.log(sumOfQuadratics([1, 2, 3, 4, 5, 6, 7, 8]));
