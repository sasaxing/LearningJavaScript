import * as httpPromise from 'http-promise'

let httpServer

async function startServer() {
    try {
        httpServer = await httpPromise.createServerAsync()
        await httpServer.listen(3000)
        console.log('->httpServer.listening: ', httpServer.listening)
    } catch (err) {
        console.log('listen Error, ', err.message)
    }
}

async function stopServer() {
    try {
        await httpServer.close()
        console.log('->httpServer.listening: ', httpServer.listening)
    } catch (err) {
        console.log('close Error, ', err.message)
    }
}

startServer().then(stopServer).then(stopServer)