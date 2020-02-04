// Filter out Strings from an Array
// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.
// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, "aasf", "1", "123", 123]
// Notes
// Zero is a non-negative number.

function filterArray(arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function testFilterArr(input, expected) {
  const resultStringified = JSON.stringify(filterArray(input));
  const expectStringified = JSON.stringify(expected);

  if (resultStringified === expectStringified) {
    console.log("PASS 👍");
  } else {
    console.log("Fail 😢 expect ", expected, " received ", filterArray(input));
  }
}

testFilterArr([1, 2, "a", "b"], [1, 2]);
testFilterArr([1, "a", "b", 0, 15], [1, 0, 15]);
testFilterArr([1, 2, "aasf", "1", "123", 123], [1, 2, 123]);
testFilterArr([" ", 2, ""], [2]);
testFilterArr([], []);
testFilterArr([-1, 0, "a", "b"], [-1, 0]);