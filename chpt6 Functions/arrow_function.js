console.log('\n1. No parameters');
function f1(){
  return 'hi';
}
console.log(f1());
console.log( ( ()=>'hi')() );

console.log('\n2. A number as parameter');
function f2(x){
  return x+10;
}
console.log(f2(2));
console.log( (x => x+10)(2)  );



console.log('\n3. Function as parameter');
function done(){
  return ' is done.';
}
function f3(sth, f){
  return sth + done();
}
console.log(f3('Homework', done));
console.log( ((sth, f) => sth + f())('Homework', done)  );
