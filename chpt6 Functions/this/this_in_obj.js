const xxs = {
  name : 'xiaosha',
  sayhi: function() { return `hello, I am ${this.name}`; },

}

const amy = {
  name : 'amy',
  speak : xxs.sayhi,
}

console.log(`${amy.speak()}`)
