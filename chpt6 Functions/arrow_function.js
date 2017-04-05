console.log('\n1. No parameters');
function f1() {
  return 'hi';
}
console.log(f1());
console.log((() => 'hi')());

console.log('\n2. A number as parameter');
function f2(x) {
  return x + 10;
}
console.log(f2(2));
console.log((x => x + 10)(2));

console.log('\n3. Function as parameter');
function done() {
  return ' is done.';
}
function f3(sth, f) {
  return sth + done();
}
console.log(f3('Homework', done));
console.log(((sth, f) => sth + f())('Homework', done));

console.log('\n4. Context binding');
//http://www.zsoltnagy.eu/es2015-lesson-1-arrow-functions/
let Ball = function (x, y, vx, vy) {
  this.x = x
  this.y = y
  this.vx = vx
  this.vy = vy
  this.dt = 25

  setInterval(() => {
    this.x += vx
    this.y += vy
    console.log(this.x, this.y)
  }, this.dt)
  /*
  setInterval(function () {
    this.x += vx
    this.y += vy
    console.log(this.x, this.y)
  }.bind(this), this.dt)
  */
}

//let ball = new Ball(0, 0, 1, 1)

/**
 * (ARGUMENTS) => VALUE;
 * 
 * function(ARGUMENTS) {
 *    return VALUE
 * }.bind(this)
 */

console.log('\n5. Exercises');
//1
const greet = () => 'Hello world';
console.log(greet())
//2
/**
 * 
 * Reduce works with an accumulator to store the value associated with reducing the array, and takes two arguments:
 *    -the initial value of the accumulator,
 *    -a function to define the operation between the accumulator and the upcoming element of the array.
 */
const getSum = (arr) => arr.reduce((accumulator, element) => accumulator + element, 1)
console.log(getSum([1, 2, 3, 4, 5]))
//3
var Entity = function (name, delay) {
  this.name = name;
  this.delay = delay;
};

Entity.prototype.greet = function () {
  setTimeout(() => {  // arrow functions make perfect sense to replace the callback's 'function'
    console.log('Hi, I am ' + this.name);
  }, this.delay);
};

var java = new Entity('Java', 1000);
var cpp = new Entity('C++', 30);


java.greet();
cpp.greet();