import * as httpPromise from 'http-promise'

const httpServer = new httpPromise.ServerPromisified()

async function startServer() {
    try {
        await httpServer.listenAsync(1000)
        console.log('->httpServer.listening: ', httpServer.listening)
    } catch (err) {
        console.log('listenAsync Error, ', err.message)
    }
}

async function stopServer() {
    try {
        await httpServer.closeAsync()
        console.log('->httpServer.listening: ', httpServer.listening)
    } catch (err) {
        console.log('closeAsync Error, ', err.message)
    }
}

startServer().then(stopServer).then(stopServer)