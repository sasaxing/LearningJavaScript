const SYM = Symbol();

const o = {a:1, b:2, c:3, [SYM]:4};


console.log('\n1. Using for...in to make the property keys of an object as an array:');
for(let prop in o){
  if(!o.hasOwnProperty(prop)) continue;
  //console.log(typeof prop);  //string
  console.log(`${prop}:${o[prop]}`);
}

console.log('\n2. Using Object.keys(o) to make the property keys of an object as an array:');
Object.keys(o).forEach(prop => console.log(`${prop}:${o[prop]}`));


console.log('\n3. Prototype Chain');
class Super{
  constructor(){
    this.name = 'Super';
    this.isSuper = true;
  }
}

Super.prototype.sneaky = 'not recommended!';

class Sub extends Super{
  constructor(){
    super();
    this.name = 'Sub';
    this.isSub = true;
  }
}

console.log(`==> create a Sub()`);
const aSub = new Sub();
for(let p in aSub){
  console.log(`${p}:${aSub[p]}` +
    ((aSub.hasOwnProperty(p)) ? '' : ' (inherited) ' ));

  // obj.hasOwnProperty(p) ==== true : p is defined on the instance obj [e.g., anObj.newProperty = 'something']
  // obj.hasOwnProperty(p) ==== false : p is not defined or defined in the prototype chain( defined on the Class) [e.g, AClass.prototype.newProperty = 'something'].
}

console.log(`==> show only the properties defined on the prototype using Object.keys(obj)`);
Object.keys(aSub).forEach(prop => console.log(`${prop}:${aSub[prop]}`));


console.log(`==> create a Super()`);
const aSuper = new Super();
for(let p in aSuper){
  console.log(`${p}:${aSuper[p]}` + ((aSuper.hasOwnProperty(p)) ? '' : ' (inherited) ' ));
}
