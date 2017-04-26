console.log('\n1.');

function* rainbow() {
  yield 'red'; // every 'next' will continue rainbow() to execute until the next 'yield';
  yield 'orange';
  yield 'yellow';
  yield 'green';
  yield 'blue';
  yield 'indigo';
  yield 'violet';
  return 'finish';
}

const iter = rainbow();
iter.next(); //{ value: 'red', done: false }
iter.next();
iter.next();
iter.next();
iter.next();
iter.next();
iter.next();
iter.next();

// things that use generators don't always pay attention to the value property when 'done' is true.
for (let color of rainbow()) {  // when done = true, it will not be printed out.
  console.log(color);
}


console.log('\n2.');
function* interrogate() {
  const name = yield "What's your name?" // the return value of `yield ***` will be the passed-in parameter of next 'next' command.
  const color = yield "what is your favorite color?"
  console.log(`${name}'s favorite color is ${color}.`)
}

const gen = interrogate();

console.log(gen.next());  //{ value: 'What\'s your name?', done: false }
console.log(gen.next("Xiaosha"));  //{ value: 'what is your favorite color?', done: false }
console.log(gen.next("yellow")); //{ value: undefined, done: true }
// exe gen.next("yellow") first : print out interrogate.log

// yield out: {value,done}
// yield in: argument
