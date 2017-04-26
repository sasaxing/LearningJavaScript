const words = ["Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November", "Chocolate",
    "Papaya", "Uniform", "Joker", "Clover", "Bali"];

const myObj = {
    name: 'xxs'
}
let i = 100

function doPromise(index) {
    return new Promise((resolve, reject) => {
        resolve(index)
    }).then(() => {
        console.log(index)
    })
}
words.forEach(function (e, index, arr) {
    console.log(i++)

    //this part will be executed in the end
    doPromise(index)
}, myObj) //,thisArg

