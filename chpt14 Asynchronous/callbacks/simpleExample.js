let func_a = function(callback){
    let a = 2;
    let b = 4;
    let c = 5;
    let t = callback(a,b,c);
    return t+10;
};

f_cb1 = function(x,y,z){
    return (x+y+z);
};
f_cb2 = function(x,y,z){
    return (x*y*z);
}
let fa1 = func_a(f_cb1);
let fa2 = func_a(f_cb2);

let fa3 = func_a(function(x,y,z){
    return (x-y-z);
});

console.log(fa1);
console.log(fa2);
console.log(fa3);
