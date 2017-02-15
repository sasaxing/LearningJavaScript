name = 'Irena';
age = 25;

// 1. Reduce the number of identifiers in the global scope:
console.log("\n1.");

let user = {
  name: "Irena",
  age : 25,
};

function greet(){
  console.log(`Hello, ${user.name}! :)`);
}

function getBirthYear(){
  return new Date().getFullYear() - user.age;
}

console.log(`${user.name} was born in ${getBirthYear()}`);
greet();

// these functions are dependent on global scope.
// does not mean you can not call them on other scopes.
// it means you will need to worry if the other scope will override/shadow/mask the global variable.

// for example, if there is another user defined in the inner scope, JS will think it means to use the new defined one.
function greet1(){
  const user = {name: "NotIrena"};
  console.log(`Hello, ${user.name}! :)`); //then it will refer to NotIrena instead
}

console.log("==> After defining new user in greet():");
greet1();  // does not relate to global user any more.

// 2. Make functions not dependent on global scope.
// then we can make greet() not able to use its own user.
console.log("\n2.");
function better_greet(user){  // user is a reference to that object, so it will still change the global obj.
  // const user = {name :'NonIrena' }  //SyntaxError: Identifier 'user' has already been declared
  // then we can make greet() not able to use its own user.
  // so that to make sure greet() will always access the global user
  // by explicitly passed a user object to it.
  console.log(`Hello, ${user.name} :)`);
}

function better_getBirthYear(user){
  return new Date().getFullYear() - user.age;
}

console.log("==> greet(user) can't define its own user anymore, just use the given one: ");
better_greet(user)

console.log("\n3.");

function a_nested_function(){
  console.log("==> These functions are still accessible here, let's call greet():");
  greet();
  function sub_function(){

    {
      const user = {name:'xxxxxx'};  // this will not be related to greet()'s user.
      user.name = 'ssssss';
    }

    user.name = 'NonIrena' // what this user refer to?
    // if you don't define a new user yourself, it refers to the closest outer scope's user automatically.
    // if you define a new user in the current scope, it refers to your current scope's user.
    // in a word: it will refer to the closest user to you(from current outward.)
    // so if you define one in an even inner scope, it does nothing with that.

    console.log("==> You can call these functions as well here, but the global user might be changed:");
    // you thought you will greet 'Irena'. but it will not.
    greet(); // user is dependent on the scope where you define this function greet().
  }
  sub_function();
}

a_nested_function()
console.log("==> the global user has been changed by the function a_nested_function():");
console.log("==> In most cases, this is unwanted.");
console.log(`Now globaluser.name = ${user.name}` ); //it has been changed by the function a_nested_function() unexpectedly.
