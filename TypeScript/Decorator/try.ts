//https://www.sitepoint.com/javascript-decorators-what-they-are/
/**
 * Decorators are actually nothing more than functions that return another function, 
 * and that are called with the appropriate details of the item being decorated. 
 * These decorator functions are evaluated once when the program first runs, 
 * and the decorated code is replaced with the return value.
 */
class Example {
    @log('[sum]') //代表Example.sum已经被log替换了。
    sum(a, b) {
        console.log('[sum]')
        return a + b;
    }

    @xxs() //代表Example.subtract已经被xxs替换了。
    subtract(a, b) {
        console.log('[subtract]')
        return a - b
    }
}
// 这个函数在有 @log 的地方就被执行了，并不是要等到它所decorate的函数被调用。
// 所以byot-CommunicationManager里面的onReceive，是在所有的东西开始之前就被执行了。
function log(name) {
    return function decorator(target, name, descriptor) {
        /**
         * [target] Example{} -- object
         * [name] sum -- string
         * [descriptor] { value: [Function: sum],
                          writable: true,
                          enumerable: false,
                          configurable: true } -- object.
         */
        const original = descriptor.value;
        if (typeof original === 'function') {
            // the magic happens here: the original function will be overwritten by the descriptor.value new function here 
            // if descriptor.value is not overwritten, then it still invoke the original function when e.sum(1,3)
            descriptor.value = function (...args) { // [MAGIC HAPPENS HERE!]
                console.log(`Arguments for ${name}: ${args}`);
                try {
                    const result = original.apply(this, args); // the original method is invoked here.
                    console.log(`Result from ${name}: ${result}`);
                    return result;
                } catch (e) {
                    console.log(`Error from ${name}: ${e}`);
                    throw e;
                }
            }
        }
        return descriptor; // this return is optional.
    };
}

function xxs() {
    return function decorator(t, n, descriptor) {
        const original = descriptor.value;
        descriptor.value = () => { console.log('[xxs!!!]') }// the magic happens here: the original function will be overwritten by the descriptor.value new function here 
        // if descriptor.value is not re-assigned, then it still invoke the original function when e.sum(1,3)
    };
}

const e = new Example()
console.log('\n==> e.sum:')
e.sum(1, 3)
console.log('\n==> e.subtract:')
e.subtract(3, 1)
/**
 * 不是在@log的时候要执行e.sum()
 * 而是在执行e.sum()的时候要转而执行log(), 而不再执行e.sum()
 * 原本的sum会在log()执行的过程中被调用(或者不，这取决于log怎么定义)
 * 
 * [byot]:
 * 不是在onReceive()的时候要执行doSomething()，
 * 而是在执行doSomething()的时候要转而去执行onReceive()，而不再执行doSomething()，
 * 原本的doSomething()会在onReceive()之中被调用（或者不，取决于onReceive怎么定义）。
 */