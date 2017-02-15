//prototype method : means the method is available on ALL instances of a class.
//basically the method is defined inside the body of the class, so it's available on the prototype of this class.
//all its instances will at least have the same methods in this class's prototype.

// Array.prototype.entries(): entries() method is available on all array instances.
// arr.entries().
// Array.isArray(): is a static method, it's not available on instances, it'll be used in different way:
// Array.isArray(arr);

class Car {
  constructor(make, model){
    this.make = make;
    this.model = model;
    this._userGears = ['P','N', 'R','D'];
    this._userGear = this._userGears[0];
  }

  get userGear() { return this._userGear;}
  set userGear(val){
    if(this._userGears.indexOf(val) < 0)
      throw new Error(`Invalid gear: ${val}!`);
    this._userGear = val;
  }

  shift(gear){
    this.userGear = gear;
  }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
console.log(`car1.shift === Car.prototype.shift : ${car1.shift === Car.prototype.shift}`);
car1.shift('D');
//car1.shift('d'); // Error: Invalid gear: d!
console.log(`car1.userGear = ${car1.userGear}`);
console.log(`car1.shift === car2.shift : ${car1.shift === car2.shift}`);


console.log("==> Let's change the shift() of car1 only:");
car1.shift = function(gear){ this.userGear = gear.toUpperCase();}
console.log(`car1.shift === Car.prototype.shift : ${car1.shift === Car.prototype.shift}`);
console.log(`car1.shift === car2.shift : ${car1.shift === car2.shift}`);
car1.shift('d'); // Won't produce any error :)
console.log(`car1.userGear = ${car1.userGear}`);
