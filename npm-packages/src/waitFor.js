var fs = require('fs');
var path = require('path');
var wait = require('wait.for');
//inside a fiber, everything is going to be executed in sequential.
// wait.for can only be used inside a fiber(a extra function)
function testFiber() {
    var result = wait.for(fs.readFile, path.join(__dirname, 'readThis.txt'));
    console.log(result);
    console.log('Fiber ends.');
    return 100;
}
//Immediately Invoke Function Expression
var result = wait.launchFiber(testFiber); // still async.
console.log('Program Ends'); //exe before wait.launchFiber returns 
console.log(result); // undefined, not 100.
/*
debugger //1
fs.mkdir('aNewFolder', function (err) {
    if (err) {
        debugger //3
        console.log('Error happens.')
    } else {
        console.log('No errors.')
    }
})
debugger  //2
console.log('Program ends.')
*/ 