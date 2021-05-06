// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
// or phrase without a repeating letter.

function checkForIsogram(inpStr) {
  let isIsogram = true;
  for (let i = 0; i < inpStr.length; i++) {
    for (let j = 0; j < inpStr.length; j++) {
      if (inpStr[i] === inpStr[j] && i !== j && inpStr[j] !== " ") {
        isIsogram = false;
      }
    }
  }
  if (isIsogram) {
    return "This is isogram";
  }
  return "Not isogram";
}

console.log(checkForIsogram("I am not"));
