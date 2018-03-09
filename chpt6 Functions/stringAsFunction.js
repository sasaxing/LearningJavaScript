const myObj = {
    varProp: 1,
    funcProp: () => {
        console.log('hello!')
    }
}

myObj.funcProp()
const funcStr = 'funcProp'
myObj[funcStr]()

const myNestedObj = {
    innerObj: {
        a: 1,
        funcProp: () => {
            console.log('hello from inside.')
        }
    }
}

const nestedFuncStr = 'innerObj.funcProp'

const nestedFuncStrings = nestedFuncStr.split('.')
console.log(nestedFuncStrings)
let funcToExecute = myNestedObj
for (let nestedFuncString of nestedFuncStrings) {
    funcToExecute = funcToExecute[nestedFuncString]
}
funcToExecute()