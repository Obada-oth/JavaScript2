/**
 
 ** Exercise 5: The lottery machine **
 
Don't you just love the thrill of the lottery? What if I told you we can make our own lottery machine? Let'
 s get started!

   Write a
 function that takes 4 arguments.

   - A start value
   - An end value
   - A callback that executes if the number is divisible by 3
   - A callback that executes if the number is divisible by 5

 The  function should first generate an array containing values from start value to end value(inclusive).

 Then the  function should take the newly created array and iterate over it, and calling the first callback
 if the array value is divisible by 3.

 The function should call the second callback
 if the array value is divisible by 5.

 Both functions should be called
 if the array value is divisible by both 3 and 5.

*/
debugger;
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  // make array
  

    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      return threeCallback;
    }
    if (numbers[i] % 5 === 0) {
      return fiveCallback;
    }
  }
}
function makeArray(){
  const numbers = [];
  
  for (let i = 0; i <= stopIndex - startIndex; i++) {
    numbers.push(startIndex + i);
    return numbers;

}
  
function sayThree() {
  console.log('Devisible By Three');
}
function sayFive() {
  console.log('devisible By Five');
}

threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive
