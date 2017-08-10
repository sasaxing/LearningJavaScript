/**
 * To take away:
 * 
 * When you pass an object as a parameter to a function, you pass only the reference of the object.
 * If you modify the object, it's doing directly on that object;
 * while if you re-assign the variable to another object, it means you change the reference to another object,
 * as a result, what you do to the new object refered by the variable will make effect on only the new object, and the old object remains unchanged.
 * 
 * That's why when you do 
 * obj.a = 11, to the variable obj, the original obj's a will be changed to 11 as well.
 * but when you do 
 * obj ={a:11}, you just refer the variable obj to another new object{a:11}, and you just drop the reference to the original object,
 * so that the original object is already out of your control. 
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
