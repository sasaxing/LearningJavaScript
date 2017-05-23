//https://github.com/Wscats/Good-text-Share/issues/85
function Foo() {
    getName = function () { console.log(1); }; // private method of Foo
    return this;
}
Foo.getName = function () { console.log(2); };
Foo.prototype.getName = function () { console.log(3); }; // public method of Foo
var getName = function () { console.log(4); };
function getName() { console.log(5); }

Foo.getName(); // [see 1.js & 2.js]
getName(); // [see 3.js]
Foo().getName(); // 

/*
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
*/