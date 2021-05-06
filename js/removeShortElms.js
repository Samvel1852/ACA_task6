// Write a function which remove elements with length <= 3

function remShortElms(inpArr) {
  let resArr = [];
  for (let item in inpArr) {
    if (inpArr[item].length > 3) {
      resArr.push(inpArr[item]);
    }
  }
  return console.log(resArr);
}
remShortElms(["kia", "tesla", "bmw", "mercedes"]);
