// Symbol is unique : similar to object
// Symbol is immutable: as primitives.

const sym1 = Symbol('red');
const sym2 = Symbol('red');
console.log(`sym1 === sym2 : ${sym1 === sym2}`); //false --> unique

console.log(`Symbol.for('gold') === Symbol.for('gold'): ${Symbol.for('gold') === Symbol.for('gold')}`); //false --> unique
//Symbol.for(sth), you look for the symbol, if not exists, you create a new one.

const obj = {
  [Symbol('name')]: 'Lily',
  property1: 1,
  property2: 2,
};

console.log(obj); // only property1 and property2.
console.log(Object.getOwnPropertySymbols(obj)); // only symbols
console.log(Reflect.ownKeys(obj)); // all


console.log(obj.property1);
console.log(obj["property1"]);
console.log(obj[Symbol('name')]); // undefined.
