const arr = [3,1.5,9,2,5.2];
Object.defineProperty(arr, 'sum', {
  value: function() { return this.reduce((a, x) => a+x); },
  enumerable: false
});

Object.defineProperty(arr, 'avg', {
  value: function(){ return this.sum()/this.length; },
  enumerable: false
});

Object.defineProperties(arr,{
  'min':{
    value: function(){return this.sort()[0];},
    enumerable: false
  },
  max:{
    value: function(){return this.sort()[this.length-1];},
    enumerable: false
  }
});

// those NaN memebers will not be enumerated.
for(let mem of arr){
  console.log(mem*10);
}

// but you can access them:
console.log(`arr.sum() = ${arr.sum()}`);
console.log(`arr.avg() = ${arr.avg()}`);
console.log(`arr.max() = ${arr.max()}`);
console.log(`arr.min() = ${arr.min()}`);
