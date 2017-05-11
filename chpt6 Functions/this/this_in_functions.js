console.log('\n1. ');
const o = {
  name: 'Julie',
  greetBackwards: function() { // can see Julie
    // debugger  // this=object o
    name = 'xiaosha'
    function getReverseName(){
      // debugger // this = [object Window]
      let nameBackwards = '';
      for(let i=this.name.length-1; i>=0; i--){
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    // debugger //this = object o
    return `${getReverseName()} si eman ym, olleH`;
  },
};

// debugger // this=[object Window]

console.log(`==> P109--two different names at different places: \n${o.greetBackwards()}`);


console.log('\n2. ');
const o1 = {
  name: 'Julie',
  greetBackwards: function() {
    const self = this;  //(self or that or anything else)
    function getReverseName(){
      let nameBackwards = '';
      for(let i=self.name.length-1; i>=0; i--){
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym, olleH`;
  },
};

console.log(`==> P109--assign a second variable to 'this' :\n${o1.greetBackwards()}`);

console.log('\n3. ');
const o2 = {
  name: 'Julie',
  greetBackwards: function() { // can see Julie
    const getReverseName = () => { // then , 'this' will be bound lexically.
      let nameBackwards = '';
      for(let i=this.name.length-1; i>=0; i--){
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym, olleH`;
  },
};

console.log(`==> P112--Arrow function: \n${o2.greetBackwards()}`);


debugger
console.log('\n4.');
console.log(`this.name = ${this.name}`);
const xs = {
  name: "xxs",
  eat : function (){
    const favFood = () => {
      console.log(`${this.name}'s favorite food is Hotpot!`);
    }
    favFood();
    //console.log(`this.name = ${this.name}`); // 'this' will be bound to the caller.
  }
}
const jl = {
  name : "yjl",
  eat: xs.eat
}
jl.eat();
