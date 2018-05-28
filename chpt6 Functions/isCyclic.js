function isCyclic(obj) {
    var seenObjects = [];

    function detect(obj) {
        if (obj && typeof obj === 'object') {
            if (seenObjects.indexOf(obj) !== -1) {
                return true;
            }
            seenObjects.push(obj);
            for (var key in obj) {
                if (obj.hasOwnProperty(key) && detect(obj[key])) {
                    //console.log(obj, 'cycle at ' + key);
                    return true;
                }
            }
        }
        return false;
    }

    return detect(obj);
}

function isTooDeep(object, callCount=0){
    if(callCount > 11) {
        return true;
    }
    for(let key of Object.keys(object)){
        if(object[key] === object) { return true; } //once detect cyclic, return true.
        if(typeof(object[key]) === 'object'){
            if(isTooDeep(object[key], ++callCount)){
                return true; // otherwise continue checking the other properties.
            }
        }
    }
    return false;
}

o1 = { a: 1 };
console.log('\n==> o1:');
console.log(isCyclic(o1));
console.log(isTooDeep(o1));

c1 = { a: 1 };
c1.c = c1;
console.log('\n==> c1:');
console.log(isCyclic(c1));
console.log(isTooDeep(c1));

a = {}
b = {}
a.b = b; b.a = a;
console.log('\n==> a:');
console.log(isCyclic(a));
console.log(isTooDeep(a));

const obj1 = {b1: {}};
const obj2 = {a2: obj1};
obj1.c = obj2;

console.log('\n==> obj1:');
console.log(isCyclic(obj1))
console.log(isTooDeep(obj1));