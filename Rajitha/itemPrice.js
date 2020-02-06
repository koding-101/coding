/**********************************************************************
 * Create a function that takes an array of objects (groceries) which 
 * calculates the total price and returns it as a number. A grocery 
 * object has a product, a quantity and a price,
 ***********************************************************************/
const getItemPrice = arr => {
  let iArr = arr;
  let itemPrice = 0;
 
  for (let i = 0; i < iArr.length; i++){
    itemPrice += Number(iArr[i].price) * (iArr[i].quantity);
  }
  return itemPrice
}

const testGetItemPrice = (arr,expected) => {
  return(getItemPrice(arr) === expected) ? true : false
}

console.log(testGetItemPrice([{product: "Milk", quantity: 1, price: 1.50}], 1.5));
console.log(testGetItemPrice([{product: "Milk", quantity: 2, price: 1.50}], 3));
console.log(testGetItemPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ], 4))
console.log(testGetItemPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 },
    { product: "Milk", quantity: 1, price: " " },
    { product: "Milk", quantity: 1, price: 9 }
  ], 13))
  console.log(testGetItemPrice([
    { product: "Milk", quantity: 0, price: 1.50 },
    { product: "Cereals", quantity: 3, price: 2.50 }
  ], 7.5))

