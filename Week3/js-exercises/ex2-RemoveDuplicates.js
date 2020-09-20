/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE
// debugger;
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
let removeDuplicates = (letters) => {
  letters.sort().forEach((letter, index) => {
    if (letters.indexOf(letter) !== index) {
      letters.splice(index, 1);
    }
  });
  return letters;
};
console.log(removeDuplicates(letters));

if (JSON.stringify(removeDuplicates(letters)) === JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f'])) {
  console.log('Hooray!');
}
