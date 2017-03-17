//A simple spy helper
function createSpy(targetFunc) {
    var spy = function () {
        spy.args = arguments; // arguments : refers to createSpy(tFunc)(arguments) 
        //i.e., the arguments you passed in when you call the function: [createSpy(tFunc)()]
        spy.returnValue = targetFunc.apply(this, arguments);
        return spy.returnValue;
    };

    return spy;
}

//Let's spy on a simple function:
function sum(a, b) { return a + b; }

var spiedSum = createSpy(sum);

spiedSum(10, 5);

console.log(spiedSum.args); //Output: [10, 5]
console.log(spiedSum.returnValue); //Output: 15