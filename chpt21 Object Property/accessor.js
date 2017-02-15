console.log('\n1. ');
class User1{
  constructor(email){
    this.email = email;
  }

  setEmail(value){
    if(!/@/.test(value)) throw new Error(`invalid email: ${value}`);
    this.email = value;
  }
  getEmail(){
    return this.email;
  }
}
const u1 = new User1('xxss@gmail');
u1.setEmail('xxssfamily61@gmail.com');
u1.email = 'lskjdf'; // dangerous!!
console.log(`User email: ${u1.getEmail()}`);




console.log('\n2.');
const USER_EMAIL = Symbol();
class User2{

  setEmail(value){
    if(!/@/.test(value)) throw new Error(`invalid email: ${value}`);
    this[USER_EMAIL] = value;
  }
  getEmail(){
    return this[USER_EMAIL];
  }
}

const u2 = new User2();
u2.setEmail('xxss@gmail');
console.log(`User email: ${u2.getEmail()}`);
u2[USER_EMAIL]='LSKJDLK'; // still...
console.log(`User email: ${u2.getEmail()}`);
