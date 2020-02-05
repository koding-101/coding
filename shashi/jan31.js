// // Create a function that takes a string and censors words over four characters with *.
// // Examples
// // censor("The code is fourty") ➞ "The code is ******"
// // censor("Two plus three is five") ➞ "Two plus ***** is five"
// // censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"

//Assumptions:
// Input is only a string
// Has no leading and trailing spaces


function censor(string) {
  var finalString = "";
  var word = "";
  var newWord = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] != " ") {
      word += string[i];
    } else {
      newWord = convertWord(word);
      finalString += newWord + " "
      newWord = "";
      word = "";
    }
  }
  newWord = convertWord(word);
  finalString += newWord
  return finalString;
}

function convertWord(word) {
  var newWord = "";
  if (word.length > 4) {
    for (let i = 0; i <= word.length - 1; i++) {
      newWord += "*";
    }
    return newWord;
  }
  return word;
}


function testCensor(string, expected) {
  (censor(string) === expected) ? console.log("Word censor is correct") : console.log(`Word cendor failed, expected "${expected}" but got "${censor(string)}"`);
}

testCensor("The code is fourty", "The code is ******");
testCensor("Two plus three is five", "Two plus ***** is five");
testCensor("aaaa aaaaa 1234 12345", "aaaa ***** 1234 *****");
testCensor("$$$$(( is not a valid number", "****** is not a ***** ******");
testCensor(" ", "");
testCensor("Not more than four", "Not more than four");
testCensor("Allll moree thann fourrr", "***** ***** ***** ******");
testCensor("123 123456 1234 1234 12345", "123 ****** 1234 1234 *****");