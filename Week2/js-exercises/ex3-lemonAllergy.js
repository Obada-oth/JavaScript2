/**
 
 ** Exercise 3: Lemon allergy **
 
  Your mom bought you a basket of fruit, because you 're doing so well in HackYourFuture. How sweet of her!
  However, she forgot that you are allergic to lemons!Let 's quickly dispose of them before you get an attack.

  Write a function that uses the filter array function to take out the lemons.
  Avoid using for loop or forEach.
  Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"

 */

function takeOutLemons(basket) {
  // your code goes in here. The output is a string
  // returns an array that doesn't contain 'lemon' or 'Lemon'
  const lemonlessBasket = basket.filter((fruit) => fruit != 'Lemon' && fruit != 'lemon');

  return `My mom bought me a fruit basket, containing : ${lemonlessBasket.join(', ')}.`;
}

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

console.log(takeOutLemons(fruitBasket)); //My mom bought me a fruit basket, containing [Apple,Grapefruit,Banana,Watermelon]
