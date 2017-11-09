console.log('Start.')

process.on('SIGINT', (code) => {
    console.log('Exit ----- ', code)
})

setTimeout(function () {
    console.log('End.')
}, 2000);
