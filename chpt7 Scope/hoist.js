'use strict';

console.log(a);  // undefined ==>  var declaration is hoisted, but the var assignmenet is not.
var a = 1;

//console.log(b);  //ReferenceError: b is not defined ==> let will not be hoisted, neither of const
let b = 2;

//console.log(c); //ReferenceError: c is not defined
const c = 3;

//http://www.zsoltnagy.eu/es2015-lesson-2-function-scope-block-scope-constants/


var guessMe1 = 1;
let guessMe2 = 2;

{  // This block creates another scope here.

    //Inside the scope, var can be seen(both declaration and definition), but let can not!
    try {
        console.log('A', guessMe1, guessMe2); // (A)Not executed, because guessMe2 is not defined ( not defined != undefined),  temporal dead zone for guessMe2
    } catch (_) { }

    let guessMe2 = 3;
    console.log('B', guessMe1, guessMe2); // (B) 1 3
}

console.log('C', guessMe1, guessMe2); // (C)  1 2

() => {

    console.log('D', guessMe1); // (D) Inside the function, won't be executed before the function is called
    var guessMe1 = 5;
    let guessMe2 = 6;
    console.log('E', guessMe1, guessMe2); // (E) Inside the function, won't be executed before the function is called
};

console.log('F', guessMe1, guessMe2); // (F) 1 2