console.log('Start.')

process.on('beforeExit', (code) => {
    console.log('Exit ----- ', code)
})

debugger
console.log('End.')
