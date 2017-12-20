const features = new Map([
    ['f1', true],
    ['f2', true],
    ['f3', false],
    ['f4', true],
]);

console.log(features) //f4=true
const anotherRefOfFeatures = features
anotherRefOfFeatures.set('f4', false)
console.log(features) //f4=false, because anotherRefOfFeatures is changed

const cloneOfFeatures = new Map(features)
console.log(cloneOfFeatures)
cloneOfFeatures.set('f4', true)
console.log(features) //f4 is still false, because cloneOfFeatures is another object.

console.log(cloneOfFeatures === features) // false :)

// But it does not work for Object!!!!!
const obj1 = {
    a: 1,
    b: 1
}

const obj2 = new Object(obj1)
console.log(obj1, obj2)

obj2.a = 11
console.log(obj1 === obj2)  // true!!!
