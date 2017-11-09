// nvm use 7
async function timeoutfunc(i) {
    console.log(`number of connections: ${i}`)
}

function myfunc() {
    const myArray = [1, 2, 3, 4, 5]
    myArray.forEach(async (i) => {
        await console.log('before await: ', i)
        await timeoutfunc(i)
        await console.log('after await: ', i)
    })
}

myfunc()