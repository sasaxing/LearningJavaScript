class Car{
  constructor(name, year, started=false){
    this.name = name;
    this.year = year;
    this.started = started;
  }
  start(){
    this.started = true;
    console.log(`Car ${this.name} started!`);
  }
  stop(){
    this.started = false;
    console.log(`Car ${this.name} stopped!`);
  }
}

class InsurancePolicy {

}

function makeInsurable(o) {
    //simply add some new behaviors to o.
    o.addInsurancePolicy = function(p) {
        this.insurancePolicy = p;
    }
    o.getInsurancePolicy = function() {
        return this.insurancePolicy;
    }
    o.isInsured = function(){
        return !!this.insurancePolicy;
    }
}

// to make an instance of Car insureable
console.log("\n==> 1.");
const car1 = new Car();
console.log(car1.isInsured); //undefined
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1.isInsured()); //true
console.log(`car1 instanceof Car: ${car1 instanceof Car}`); //true
console.log(`car1 instanceof InsurancePolicy: ${car1 instanceof InsurancePolicy}`); //false
// But we actually want it to tell us car1 IS also an instanceof InsurancePolicy(because we need it to have the InsurancePolicy's behaviors)
// Then, the best we can do is duck typing (if it has a method called addInsurancePolicy, it must be insurable).


// make the entire class Ccar insureable
console.log("\n==> 2.");
makeInsurable(Car.prototype);
const car2 = new Car();
car2.addInsurancePolicy(new InsurancePolicy());
console.log(car2.isInsured()); //true


//solve methods' name confliction in Car and InsurancePolicy
// using Symbol()
console.log("\n==> 3.");

const ADD_POLICY = Symbol()
const GET_POLICY = Symbol()
const IS_INSURED = Symbol()
const _POLICY = Symbol()
function makeInsurableWithoutConfliction(o){
    o[ADD_POLICY] = function(p) {
        this[_POLICY] = p;
    }
    o[GET_POLICY] = function() {
        return this[_POLICY];
    }
    o[IS_INSURED] = function(){
        return !!this[_POLICY];
    }
}
const car3 = new Car();
makeInsurableWithoutConfliction(car3);
car3[ADD_POLICY](new InsurancePolicy())
console.log(car3[IS_INSURED]()); //true
