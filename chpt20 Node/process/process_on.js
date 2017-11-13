console.log('Start.')

process.on('SIGINT', () => {
    console.log('------ Exit ----- ')
})

setTimeout(function () {
    console.log('End.')
}, 2000);
