//serializes date:


const before = {d: new Date()} // before = current moment
console.log("==> create a new Date() object called before:");
console.log(`before = ${before}`);
console.log(before);
console.log(`typeof before = ${typeof before}`); //object
console.log(`typeof before.d = ${typeof before.d}`); //object

console.log("==> use JSON to tranmit before(object) into json(string) for convenience of trasmission:");
const json = JSON.stringify(before);
console.log(`json = ${json}`);
console.log(`typeof json = ${typeof json}`); //string

console.log("==> parse json(string) to a Date object again");
const after = JSON.parse(json);
console.log(`after = ${after}`);
console.log(after);
console.log(`typeof after = ${typeof after}`); //object
console.log(`typeof after.d = ${typeof after.d}`); //string

// JSON can not do it totally symmetrically
// before and after is not exactly the same.
// the string serialization that JavaScript uses is always consistent,
// so you can “recover” a date
