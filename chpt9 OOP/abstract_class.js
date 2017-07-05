/** 
 * abstract keyword can only be used in ts.
 */
/**
 @constructor
 @abstract
 */
var Animal = function () {
    if (this.constructor === Animal) {//manually make constructor of Animal unuseable.
        throw new Error("Can't instantiate abstract class!");
    }
    // Animal initialization...
};

/**
 @abstract
 */
Animal.prototype.say = function () {
    throw new Error("Abstract method!");
}

//new Animal(); // throws

/**
 * Cat extends Animal
 */
var Cat = function () {
    Animal.apply(this, arguments);
    // Cat initialization...
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function () {
    console.log('meow');
}

/**
 * Dog extends Animal
 */
var Dog = function () {
    Animal.apply(this, arguments);
    // Cat initialization...
};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.say = function () {
    console.log('Wang');
}

var cat = new Cat();
var dog = new Dog();

cat.say();
dog.say();
