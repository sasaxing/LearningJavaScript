async function test() {
    // No unhandled rejection!
    await Promise.reject(new Error('test rejected'));
}

test().catch(err => { console.log(err.message) })

try {
    test()
} catch (err) {
    console.log(err.message)
}