const myCar = {
    name: 'Audi',
    year: 1998,
    start: function () {
        console.log(`${this.name} is starting...`)
    }
}

myCar.start()
//const carCopy = JSON.parse(JSON.stringify(myCar)) // only the properties(values) get serialized, and the methods get left behind.
//carCopy.start() //TypeError: carCopy.start is not a function

let replacer = (key, value) => {
    console.log(key)
    // if we get a function, give us the code for that function  
    if (typeof value === 'function') {
        return value.toString();
    }
    return value;
}

const serialized = JSON.stringify(myCar, replacer, 2);
console.log(serialized)

let reviver = (key, value) => {
    if (typeof value === 'string'
        && value.indexOf('function ') === 0) {
        let functionTemplate = `(${value})`;
        return eval(functionTemplate);//Evaluates JavaScript code and executes it.
    }
    return value;
}

const deserialized = JSON.parse(serialized, reviver)
deserialized.start()

const stringCode = 'console.log(\'I am xiaosha\')'
eval(stringCode)