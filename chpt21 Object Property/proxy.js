const cook = {
  name: "Walt",
  redPhosphorus: 100, // dangerous
  water: 500, // safe
};
const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    if(key === 'redPhosphorus') {
      if(target.allowDangerousOperations)
      return target.redPhosphorus = value;
    else
      return console.log("Too dangerous!");
    }
    // all other properties are safe
    target[key] = value;
  },
});

protectedCook.water = 550; // 550
console.log('==> first try:');
protectedCook.redPhosphorus = 150; // Too dangerous!
console.log(`protectedCook.redPhosphorus = ${protectedCook.redPhosphorus}`);

console.log('==> second try:');
protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150; // 150
console.log(`protectedCook.redPhosphorus = ${protectedCook.redPhosphorus}`);
