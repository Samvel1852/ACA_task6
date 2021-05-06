// Write a function that implements filtering in array
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

function filterFalsyValues(inpVals) {
  let resArr = [];
  for (item in inpVals) {
    if (inpVals[item]) {
      resArr.push(inpVals[item]);
    }
  }
  return console.log(resArr);
}

filterFalsyValues(values);
