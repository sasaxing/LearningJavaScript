const foo = require('./foo')

exports.main = function () {
    console.log(foo);
}

foo.greeting()

console.log(exports === module.exports)