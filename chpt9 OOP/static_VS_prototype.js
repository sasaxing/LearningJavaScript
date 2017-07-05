/**
 * prototype method vs. static method
 * 
 * prototype method : means the method is available on ALL instances of a class.
 * basically the method is defined inside the body of the class, so it's available on the prototype of this class.
 * all its instances will at least have the same methods in this class's prototype.
 * e.g., Array.prototype.entries(): entries() method is available on all array instances. so it's a prototype method.
 * it's used in this way: arr.entries().
 * 
 * Array.isArray(): is a static method(aka. class method), 
 * it's not available on instances but class itself, 
 * it'll be used in different way: Array.isArray(arr);
 */

console.log('\n==>1.');
class Car {
  constructor(name, year, started = false) {
    this.name = name;
    this.year = year;
    this.started = started;
  }
  start() {
    this.started = true;
    console.log(`Car ${this.name} started!`);
  }
  stop() {
    this.started = false;
    console.log(`Car ${this.name} stopped!`);
  }
}

const car1 = new Car('BMW', 1997, false);
const car2 = new Car('Audi', 1922);  // started will be default/undefined(if no default value).
console.log(car1);
console.log(car2);
console.log(car1.start === car2.start); //true
car1.start();
car1.start = function () {
  if (!this.started) {
    this.started = true;
  }
}
console.log(car1.start === car2.start);//false
Car.prototype.start();
// start() is a prototype method, it's available on all instances of class Car.
// because it's defined in


console.log('\n==>2.');
car1.drive = function () {
  if (this.started) {
    console.log("Let's drive!");
  } else {
    console.log("You should first start it!");
  }
}
car1.drive();
console.log(Object.getPrototypeOf(car1)); // Car{}: class Car's prototype.
let str = Object.getOwnPropertyDescriptor(car1, 'drive');
console.log(str);
//Car.prototype.drive();
//Error, it's not a prototype method of Car.
// it's only available on car1.

console.log('\n==>3.');

//http://www.zsoltnagy.eu/es2015-lesson-4-classes/
function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function () {  //add 'getColor' to the Class Shape <==> all instances have this property.
  return this.color;
}

function Rectangle(color, width, height) {
  Shape.call(this, color);  // Shape(color).bind(this): this.color = color
  this.width = width;
  this.height = height;
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

let rectangle = new Rectangle('red', 5, 8);
console.log(rectangle.getArea());
console.log(rectangle.getColor());
console.log(rectangle.toString());
