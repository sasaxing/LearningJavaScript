var Person = /** @class */ (function () {
    function Person() {
        this.name = "initial name";
    }
    return Person;
}());
var aPerson = new Person();
console.log(aPerson.name);
//aPerson.name = 'anotherName';
//console.log(aPerson.name);