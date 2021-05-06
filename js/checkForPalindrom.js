// Check whether string is palindrome, or not.

function isPalindrom(inpStr) {
  let revStr = inpStr.split("").reverse().join("");
  if (revStr.toLowerCase() === inpStr.toLowerCase()) {
    return "This is palidrom";
  }
  return "This is not palindrom";
}

console.log(isPalindrom("Ogo"));
