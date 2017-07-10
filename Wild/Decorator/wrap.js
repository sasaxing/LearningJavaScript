function doSomething(name) {
    console.log('Hello, ' + name);
}

function loggingDecorator(wrappee) {
    return function () {
        console.log('Starting');
        const result = wrappee.apply(this, arguments);
        console.log('Finished');
        return result;
    }
}

//take doSomething as wrappee, and wrap it with loggingDecorator
const wrapped = loggingDecorator(doSomething);

doSomething('Xiaosha') // Hello, Xiaosha
wrapped('Xiaosha')//loggingDecorator(doSomething)('Xiaosha')