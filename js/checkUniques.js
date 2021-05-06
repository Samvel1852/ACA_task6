// Given an array. Determine whether it consists only from uniques or not.

function checkForUniques(inpArr) {
  //   if (inpArr.some((a, b) => a !== b)) {
  //     return "Uniques";
  //   }
  //   return "not Uniques";
  let count = 0;
  for (let i = 0; i < inpArr.length; i++) {
    for (let j = 0; j < inpArr.length; j++) {
      if (inpArr[i] === inpArr[j] && i !== j) {
        count++;
      }
    }
  }
  if (count) {
    return "not Uniques";
  }
  return "Uniques";
}

console.log(checkForUniques([1, 2, 3, 4, 5]));
