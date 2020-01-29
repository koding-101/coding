/****************************************************************************
 * A group of friends have decided to start a secret society. The name will 
 * be the first letter of each of their names, sorted in alphabetical order.
 * Create a function that takes in an array of names and returns the name of 
 * the secret society.
 * ex:societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
 *    societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
 ***************************************************************************/
const sortNames = arr => {
  let firstName;
  let secondName;
  let tempName;
  let testArray = arr.concat();

  for (let i = 0; i <= testArray.length-2; i++){
    firstName = testArray[i].toLowerCase().charCodeAt(0);  
    for (let j = i+1; j <= testArray.length-1; j++){
      secondName = testArray[j].toLowerCase().charCodeAt(0);
      if (firstName > secondName){
        tempName = testArray[i];
        testArray[i] = testArray[j];
        testArray[j] = tempName;
        firstName = secondName;
      }
    }
  }
  return (getSocietyName(testArray));
}

//Get first characters of each array and append them to form the Society Name
const getSocietyName = testArray => {
  let societyName = "";
  for (let i = 0; i <= testArray.length-1; i++){
    societyName += testArray[i].charAt(0);
  }
  return societyName;
}

//Test function
const testSocietyName = (arr, expectedName) => {
  console.log(sortNames(arr) === expectedName? "Test pass": "Test fail");
}

testSocietyName(["Banana", "Apple", "Pear", "Carrot"], "ABCP");
testSocietyName(["Banana", "Apple", "Pear", "Carrot", "Dog", "Queen", "Lion"], "ABCDLPQ");
testSocietyName(["Kite", "Slate", "Apricot", "Kitten", "Bug", "Hen", "Frog"], "ABFHKKS");
testSocietyName(["Harry", "Newt"], "HN");
testSocietyName(["Harry", "Cho"], "CH");
testSocietyName(["Harry", "@Gd", "Luna", "Cho"], "@CHL");
testSocietyName(["Harry", "123", "Luna", "Cho"], "1CHL");
testSocietyName(["Harry", "Newt", "luna", "Cho"], "CHlN");