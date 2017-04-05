//$ npm run exe array-foreach.js
const words = ["Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November"];

const myObj = {
    name: 'xxs'
}
let i = 100
let j = 200

function printPromisely(item) {
    return new Promise((resolve, reject) => {
        resolve(item)
    }).then(() => {
        console.log(item)
    })
}


words.forEach( function (element, index, arr) {
    console.log(i++)

    //this part will be executed in the end
     printPromisely(element)

    console.log(j++)
}, myObj)

