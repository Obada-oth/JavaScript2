/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24,  36

 */

debugger;
function createBase(/* ???? */ x) {
  // Put here your logic...
  return function (y) {
    return (x = x + y);
  };
}

const addNine = createBase(6);

console.log(addNine(9)); //15
console.log(addNine(9)); //24
console.log(addNine(9)); //33
