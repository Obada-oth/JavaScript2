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
function threeFive(startNumber, stopNumber, threeCallback, fiveCallback) {
  // make array
  function makeArray() {
    let numbers = [];

    for (let i = 0; i <= stopNumber - startNumber; i++) {
      numbers.push(startNumber + i);
    }
    return numbers;
  }
  let newArray = makeArray();

  newArray.forEach((num) => {
    if (num % 3 === 0) {
      threeCallback(num);
    }
    if (num % 5 === 0) {
      fiveCallback(num);
    }
  });
}

function sayThree(num) {
  console.log(num + ' Is devisible By Three');
}
function sayFive(num) {
  console.log(num + ' Is devisible By Five');
}

threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive
