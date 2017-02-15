'use strict'

/*
function makeIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}
*/
function makeIterator(array){

  var currIndex = 0;

  return {  // return an object: { next: function()}
    next: function(){   // to call next: it.next()  or it["next"]()
      return currIndex < array.length ?
        {value: array[currIndex++], done: false} :
        {value: undefined, done: true};
    },
    prev: function(){
      return currIndex > 0 ?
        {value: array[currIndex--], done: false} :
        {value: undefined, done: true};
    },
    curr: function(){
      return (currIndex>=0 && currIndex<array.length) ?
        {value: array[currIndex], done: false} :
        {value: undefined, done: true};
    },
  }
}

const book = [
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
  "Up above the world you fly,",
  "Like a tea tray in the sky.",
  "Twinkle, twinkle, little bat!",
  "How I wonder what you're at!",
];

console.log("\n1. my Interator:");
const it = makeIterator(book);
//const it = book.values();
console.log("==> it.next() for 8 times:");
console.log(it.next());
console.log(it["next"]());
console.log(it.next().value);
console.log(it.next().done);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log("==> it.prev() for 4 times:");
console.log(it.prev());
console.log(it.prev());
console.log(it.prev());
console.log(it.prev());

console.log("==> it.curr()");
console.log(it.curr());


console.log("==> Look into 'it':");
console.log(`it = ${it}`);
console.log(it);

console.log("\n2. use while loop to enumerate over this array:");
const it1 = makeIterator(book);
let current = it1.next();
while(!current.done){
  console.log(current.value);
  current = it1.next();
}
