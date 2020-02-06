/**************************************************************************
* Create a function that returns true if the first array can be nested
* inside the second.
* arr1 can be nested inside arr2 if:
* 1. arr1's min is greater than arr2's min.
* 2. arr1's max is less than arr2's max.
* Examples
* canNest([1, 2, 3, 4], [0, 6]) ➞ true
* canNest([3, 1], [4, 0]) ➞ true
* canNest([9, 9, 8], [8, 9]) ➞ false
* canNest([1, 2, 3, 4], [2, 3]) ➞ false
****************************************************************************/
const canArrayNest = (arr1, arr2) => {
  let tArr1  = [...arr1];
  let tArr2  = [...arr2];;  
  let tArr1Min = tArr1[0];
  let tArr1Max = tArr1[0];
  let tArr2Min = tArr2[0];
  let tArr2Max = tArr2[0];

  tArr1Min = getArrVal(tArr1, tArr1Min, "min");
  tArr1Max = getArrVal(tArr1, tArr1Max, "max");
  tArr2Min = getArrVal(tArr2, tArr2Min, "min");
  tArr2Max = getArrVal(tArr2, tArr2Max, "max");

  return ((tArr1Min > tArr2Min) && (tArr1Max < tArr2Max))
}

const getArrVal = (tArr, tArrNum, str) =>{
  for (let i = 1; i <= tArr.length; i++){
    if (str === "min"){
      if (tArrNum > tArr[i]){
        tArrNum = tArr[i];
      }
    }
    if (str === "max"){
     if (tArrNum < tArr[i]){
      tArrNum = tArr[i];
     }
    }
  }
  return tArrNum;
}

const testNestArray = (arr1, arr2, expected) => {
  return canArrayNest(arr1, arr2) === expected;
}

console.log(testNestArray([3, 2, 4, 7, 8, 5], [5, 9, 1, 6, 2], true));
console.log(testNestArray([3, 1, 4, 7, 8, 5], [5, 9, 1, 6, 2], false));
console.log(testNestArray([3, 2, 4, 7, 8, 5], [5, 8, 1, 6, 2], false));
console.log(testNestArray([3, 2, 4, 7, 8, 5], [5, 9,  , 6, 2], false));
console.log(testNestArray([3, 1], [4, 0], true));
console.log(testNestArray([9, 9, 8], [8, 9], false));
console.log(testNestArray([1, 2, 3, 4], [2, 3], false));
console.log(testNestArray([3, 3], [2, 5], true));
