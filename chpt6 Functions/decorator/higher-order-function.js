//http://raganwald.com/2015/06/28/method-decorators.html

console.log('\n==>1. takes a function as parameter(example from wiki)')
const workHarder = (f, v) => f(f(v))
const workHard = v => v + 1 // hard: +1 --> harder: +1+1
console.log(workHarder(workHard, 0))

console.log('\n==>2. takes a function as return value')
// 'maybe' helps fn to deal with the situation that some args are null.
// working as a decorator for fn.
// The decoratee is the passed-in parameter of the decorator
const maybe = (fn) =>
    (...args) => {
        for (let arg of args) {
            if (arg == null) return arg;
        }
        return fn(...args);
    }
let result = [1, null, 3, 4, null, 6, 7].map(maybe(x => x * x))
console.log(result) //=> [1,null,9,16,null,36,49]


console.log('\n==>3. show function\'s arguments inside the body');

function showArgs() {
    console.log(...arguments) //arguments is a keyword referenced to function's passed-in parameters
}
showArgs(1, 3, {})
