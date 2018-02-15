const xxs = {
  name : 'xiaosha',
  sayhi: function() { return `hello, I am ${this.name}`; }, 
  //The 'this' here is refering to the context where this function is invoked by default.
}

const amy = {
  name : 'amy',
  speak : xxs.sayhi, // Thus, the 'this' in sayhi() will be bound to amy by default.
  //speak : xxs.sayhi.bind(xxs), // unless you explicitely bind it to what you want.
}

console.log(`${amy.speak()}`)
