/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

// debugger;
let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

//output is alert:12.
// variable a is declared and assigned the value 10 in the global scope.
// function x is declared and defined  , a new local scope is created, in which the value of 12 is assigned to the variable a.
// function x returns a function that calls itself immediately and displays alert with the value of a in the local scope.
