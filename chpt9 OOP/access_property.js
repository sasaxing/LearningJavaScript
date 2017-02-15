console.log('\n1. Dynamic Properties(aka., Accessor Properties )');
class Car {
  constructor(make, model){
    this.make = make;
    this.model = model;
    this._userGears = ['P','N', 'R','D'];
    this._userGear = this._userGears[0];
  }

// these get and set makes _userGear private.
// car1.userGear <=>  call get
// car1.userGear = 'X'  <=> call set
// the idea here is that you can't access userGear directly as before:
// car1.userGear will lead to calling the setter
// but you will still be able to access _userGear as you did :(

  get userGear() { return this._userGear;}
  set userGear(val){
    if(this._userGears.indexOf(val) < 0)
      throw new Error(`Invalid gear: ${val}!`);
    this._userGear = val;
  }

  shift(gear){
    this.userGear = gear;
    //this._userGear = gear;  // then outside will change _userGear directly using this function.
    // yes, others still can do this directly, but normal and good people will not.
  }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
console.log(`==> Initially, I set car1 as follows:`);
console.log(car1);

console.log(`==> Let's access the getter function (car1.userGear)`);
console.log(`car1.userGear = ${car1.userGear}`);

console.log(`==> Let's access the setter function (car1.userGear='R')`);
car1.userGear = 'R'
console.log(`car1.userGear = ${car1.userGear}`);
//car1.userGear = 'X'  // will raise an Error

console.log(`==> Let's use the method (car1.shift('D'))`);
car1.shift('D');
console.log(`car1.userGear = ${car1.userGear}`);
//car1.shift('X'); // will raise an error, and it should raise it.

console.log(`==> Check the class of an object using instanceof:`);
console.log(`car1 instanceof Car = ${car1 instanceof Car}`);
console.log(`car2 instanceof Array = ${car2 instanceof Array}`);
