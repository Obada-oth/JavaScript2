/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

// outputs 9 because x is declared with const and assigned the value of 9 ,
//  console.log(x) will log this value.
// to get the function's returned value in the console : console.log(f1(x)).
// OR :
// let x=9
// function f1(val) {
//   val = val + 1;
//   return (x=val);
// }
// f1(x);
// console.log(x);
//

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
// outputs {x:10}
// The value that y is pointing to (the object) didn't change here ,y is still pointing to the object
//  only the property  x of the object changed.
