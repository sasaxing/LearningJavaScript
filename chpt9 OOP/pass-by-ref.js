/**
 * To take away:
 * 
 * When you pass an object as a parameter to a function, it will be automatically regarded as a const object.
 * So the reference is a constant, which can't be changed.
 * As a result, you can modify the object itself, but not the reference.
 * I.e., you can modify the property of the object, but can't reassign the variable to another object(change the reference).
 * 
 * NOTE: But it does not throw error to you when you try to modify the reference.
 * Instead it creates another object for you....
 */

const myObj = {
    a: 1,
    b: 2
}

function modifyObjectProperties(obj) {
    obj.a = 11 // modifying the original obj
    obj.b = 22
    return obj
}

function reassignTheWholeObj(obj) {
    obj = { // you are trying to reassign the const obj, it's not allowed. So JS creates a new obj for you.
        a: 111,
        b: 222
    }
    return obj
}

console.log(myObj.a) //1
modifyObjectProperties(myObj)
console.log(myObj.a) //11: because it's pass-by-ref, the original myObj is modified.
reassignTheWholeObj(myObj)
console.log(myObj.a) //11: because the passed-in obj is actually a constant, you can't reassign the whole obj.
