function test(timeout) {
    const p = new Promise((resolve) => {
        setTimeout(() => {
            console.log('trigger with timeout ' + timeout)
            resolve()
        }, timeout)
    })
    return p
}
const array = [300, 100]
array.forEach((timeout) => {
    test(timeout)
})