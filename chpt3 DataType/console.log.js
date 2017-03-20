const arr = [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']]
const myObj = {
    name: 'xxs',
    myMethod: function (param1, param2) {
        console.log(`this is my method, with param: ${param1} and ${param2}`)
    }
}

console.log(`arr = ${arr}`)//arr = 1,2,3,4,5,a,b,c,d,e

console.log('arr = ', arr)//arr =  [ [ 1, 2, 3, 4, 5 ], [ 'a', 'b', 'c', 'd', 'e' ] ]

console.log(`myObj = ${myObj}`)//myObj = [object Object]

console.log('myObj = ', myObj)//myObj =  { name: 'xxs', myMethod: [Function: myMethod] }
