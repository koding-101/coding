
// Create a function that takes a word, number of consecutives and returns true if the word has number of consecutive identical letters.
// Examples
// doubleLetters("loop", 2) ➞ true
// doubleLetters("yummy", 3) ➞ false
// doubleLetters("yummmy", 3) ➞ true
// doubleLetters("orange") ➞ false
// doubleLetters("munchkin") ➞ false

//Assumptions:
//Input is a string
//function returns true if string has specified or more count consecutive same character 

function doubleLetters(string, count) {
  var counter = 1;

  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      counter++;
      if (count === counter) {
        return true;
      }
    } else {
      counter = 1;
    }
  }
  return false;
}

function testDoubleLetters(inputStr, count, output) {
  console.log(doubleLetters(inputStr, count) === output ? "Pass" : "fail");
}

testDoubleLetters("orrrrrrrrange", 8, true);
testDoubleLetters("orrrrrrrrange", 7, true);
testDoubleLetters("cooonsecutives", 3, true);
testDoubleLetters("loop", 2, true);
testDoubleLetters("yummy", 3, false);
testDoubleLetters("yummmy", 3, true);
testDoubleLetters("soooon", 4, true);
testDoubleLetters("1122333333", 6, true);
testDoubleLetters("this haaas some wooooords", 5, true);
testDoubleLetters("this haaas some wooooords", 3, true);
testDoubleLetters("this haaas some wooooords", 7, false);
testDoubleLetters("12333444445555555555", 6, true);
testDoubleLetters("somechar$$$$$", 5, true);
testDoubleLetters("", 1, false);