const u1 = {
    name: 'Amy'
};
const u2 = {
    name: 'Bill'
};
const u3 = {
    name: 'Carl'
};
const u4 = {
    name: 'Darly'
};

const userRoles = new Map();

console.log("\n1. Use map to assign users to roles using set():");
userRoles.set(u1, 'User'); // return the new userRoles, so it can be chaind.
userRoles.set(u2, 'User').set(u3, 'Admin');
console.log(`==> userRoles:`);
console.log(userRoles);
console.log(`typeof userRoles = ${typeof userRoles}`); //object
console.log(`userRoles.size = ${userRoles.size}`); //3

console.log("\n2. Pass an array of arrays to map's constructor:");
const userRoles1 = new Map([
    [u1, 'User'],
    [u2, 'User'],
    [u3, 'Admin'],
    [u4, 'User'],
]);
console.log(`userRoles1.size = ${userRoles1.size}`); //4

console.log("\n3. access map's entry using has() and get()")
console.log(`userRoles.has(u1) = ${userRoles.has(u1)}`);
console.log(`userRoles.get(u1) = ${userRoles.get(u1)}`);

console.log(`userRoles.has(u4) = ${userRoles.has(u4)}`);
console.log(`userRoles.get(u4) = ${userRoles.get(u4)}`);

console.log("\n4. keys(), values(), entries()")
console.log(`==> userRoles.keys() = ${userRoles.keys()}:`);
console.log(userRoles.keys());
console.log(`typeof userRoles.keys() = ${typeof userRoles.keys()}`); //object
console.log(`==> userRoles.values() = ${userRoles.values()}:`);
console.log(userRoles.values());
console.log(`==> userRoles.entries() = ${userRoles.entries()}:`);
console.log(userRoles.entries());


console.log("\n5. Iterate over map by for...of loop:");
for (let u of userRoles.keys()) {
    console.log(u.name);
}
for (let r of userRoles.values()) {
    console.log(r);
}
for (let ur of userRoles.entries()) {
    console.log(`${ur[0].name}: ${ur[1]}`);
}
for (let [u, r] of userRoles.entries()) {
    console.log(`${u.name}: ${r}`);
}
for (let [u, r] of userRoles) { //entries() is the default iterator for a Map.
    console.log(`${u.name}: ${r}`);
}

console.log("\n6. delete enetries by delete(u) and clear():");
userRoles.delete(u2);
console.log(`userRoles.size = ${userRoles.size}`); //2

userRoles.clear();
console.log(`userRoles.size = ${userRoles.size}`); //0

console.log("\n7. weakmap:");
// WeakMap's key can only be objects, not primitives, not symbols, which can be in Map.
// WeakMap's key's reference to the object will not increment the object's reference counter.
// So that if there is no other variables that hold reference to this object, the object will be gc.
// but for Map: if obj1 = {a:1}, map1 = { obj1 => 'k1' }, when obj1=null, the object that obj1 refered to will still live in heap,
// because map1's first key still holds a reference to it.
const SecretHolder = (function () {
    const secrets = new WeakMap();
    return class {
        setSecret(secret) {
            secrets.set(this, secret);
        }
        getSecret() {
            return secrets.get(this);
        }
    }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('Secret A');
b.setSecret('Secret B');

console.log(`a.getSecret() = ${a.getSecret()}`);;
console.log(`b.getSecret() = ${b.getSecret()}`);;

a.setSecret(b, 'Secret C');
console.log(`a.getSecret() = ${a.getSecret()}`);;
console.log(`b.getSecret() = ${b.getSecret()}`);;
