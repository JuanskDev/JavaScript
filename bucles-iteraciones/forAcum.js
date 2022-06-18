/*
  Diego needs you to get the cart totals working. Complete the following:
  
  1. Loop through all the items in the cart and add up the `price` for each item, storing the result in `subtotal`.
  2. Set the `total` variable equal to the `subtotal` plus the `shipping` cost.
*/

let cart = [
    {
      itemName: "Walnut Guitar Mount",
      price: 62.0,
    },
    {
      itemName: "Wooden Guitar Pick Box",
      price: 8.5,
    },
    {
      itemName: "Mahogany Guitar Stand",
      price: 149.99,
    },
  ];
  
  let subtotal = 0;
  let shipping = 12.99;
  let total = 0;
  //////////////////////////////////////////////////////
  // Do not change anything above here.
  //////////////////////////////////////////////////////
  // Write your solution here!
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price;
  }
  
  total = subtotal + shipping;



  /* 
  // An example of the accumulator pattern
let colors = ["red", "white", "blue"];
let statement = "My favorite colors are ";

for (let i = 0; i < colors.length; i++) {
 
 let  color =  colors[i];
 
 statement += color;   ------------------------------- NO ME SALE ! NO ME SALE ! NO ME SALE !! CORROBORAR!
} 

// Challenge 1: Make the statement say the following:
// 'My favorite colors are red, white, blue,'

// Challenge 2: Make the statement say the following:
// 'My favorite colors are red, white and blue.'

console.log(statement);
 */
  
 
  
  //////////////////////////////////////////////////////
  // Do not change anything below here.
  //////////////////////////////////////////////////////
  console.log("The subtotal is: " + subtotal);
  console.log("The shipping is: " + shipping);
  console.log("The total is: " + total.toFixed(2));
  
  
 
  
  