const fs = require('fs')

try {
    fs.mkdir('newDir', function (err) {
        throw new Error('==>Callback: throw no matter what.')
        // the error thrown by callbacks can not be catched.
        // this will make the app crash.
    })
    throw new Error('==>outside Callback: throw no matter what.')
    // The error thrown here can be handled gracefully by the catch block.
} catch (err) {
    console.log(err.message)
}

