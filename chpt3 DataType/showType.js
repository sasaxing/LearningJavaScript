const str = 'string'
const arr = [1, 3, 2]
const obj = { a: 1 }

console.log(Object.prototype.toString.call(str)) //[object String]
console.log(Object.prototype.toString.call(arr)) //[object Array]
console.log(Object.prototype.toString.call(obj)) //[object Object]
console.log(toString.call(arr)) //[object Array]

console.log(typeof (Object.prototype.toString.call(str)))  //string
console.log(Object.prototype.toString.call(str) === '[object String]')  //true