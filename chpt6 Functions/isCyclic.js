
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

a = {}
b = {}
a.b = b; b.a = a;
console.log(isCyclic(a));

c1 = { a: 1 };
c1.c = c1;
console.log(isCyclic(c1));

o1 = { a: 1 };
console.log(isCyclic(o1));
