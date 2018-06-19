console.log('\n1.bind it using call(bounder)');
const bruce = { name: "Bruce"};
const madeline = {name : "Madeline"};

function greet(){
  return `Hello, I am ${this.name}!`;
}

function update(birthYear, occupation){
  this.birthYear = birthYear;  // 'this' will be bound to the caller
  this.occupation = occupation; // or you decide the bounder using 'call'
}

console.log('--',greet());

const g1=greet.call(bruce);
const g2=greet.call(madeline);
console.log(g1);
console.log(g2);

console.log('\n2. adding arguments to call()');
const u1 = update.call(bruce, 1949, 'singer');  // bruce is now { name: "Bruce", birthYear: 1949,  occupation: "singer" }
const u2 = update.call(madeline, 1942, 'actress');
// typeof u1 : undefined ????
console.log(`After update.call(), bruce gets new properties: bruce.birthYear = ${bruce.birthYear}`)

console.log('\n3. bind using apply(bounder)');
update.apply(bruce,[1955,'actor']); // apply takes its arguments as as array
console.log(`After update.apply(), bruce gets new properties: bruce.birthYear = ${bruce.birthYear}`)

console.log('\n4. call & spread variable');
const newInfos = [1940, 'matrial artist'];
update.call(bruce, ...newInfos);
console.log(`After update.call(...), bruce gets new properties: bruce.birthYear = ${bruce.birthYear}`)

console.log('\n5. using apply() for array processing');
// use case of apply()
const arr=[2,3,-1, -22,19];
console.log(Math.min.apply(null, arr)); //Math does not use 'this' at all. it does not matter who calls it.
console.log(Math.max.call(null, ...arr)); //similar to Class method of Java?
console.log(Math.max(...arr)); //similar to Class method of Java?



console.log('\n6.bind with bind(bounder)');
const updateBruce = update.bind(bruce);  // assign 'update' to a new function var, and bind it.
// bind 'this' in function 'update' to 'bruce' all the time.

updateBruce(1904,'actor'); // update Bruce!!
console.log(bruce.birthYear); // 1904

updateBruce.call(madeline, 1274, 'king'); // still update Bruce!!!
console.log(bruce.birthYear); // 1274
console.log(madeline.birthYear); //still 1942

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949('singer, songwriter');
console.log(bruce.birthYear);
console.log(bruce.occupation);



console.log('\n7. bind()');
const bill = {
  name : "Bill",
  sayhi : function(){
    return `My name is ${this.name}`
  }
}
const amy = {
  name: "Amy",
  sayhi: bill.sayhi,
}
console.log(`amy.sayhi() = ${amy.sayhi()}`);
console.log(`bill.sayhi() = ${bill.sayhi()}`);
console.log(`typeof amy.sayhi.bind(bill) = ${typeof amy.sayhi.bind(bill)}`);
console.log(`typeof amy.sayhi.bind(bill)() = ${typeof amy.sayhi.bind(bill)()}`);
console.log(`amy.sayhi.bind(bill)() = ${amy.sayhi.bind(bill)()}`);
console.log(`bill.sayhi.bind(bill)() = ${bill.sayhi.bind(bill)()}`);
console.log(`bill.sayhi.bind(amy)() = ${bill.sayhi.bind(amy)()}`);
