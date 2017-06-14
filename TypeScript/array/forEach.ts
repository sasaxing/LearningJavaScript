const timers = [3000, 2000, 1000]
timers.forEach(async (timer) => {
    console.log('begin')
    await returnAPromise(timer).then((msg) => {
        console.log(msg)
    })
    console.log('end')
})

function waitNms(n) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(`${n}: ${n / 1000} s passed.`)
        }, n);
    })
}

function returnAPromise(n) {
    return new Promise((resolve, reject) => {
        resolve(`${n}: resolved.`)
    })
}

/**
 * [T417: StorageProvider] (forEach + async-await) -> Promise.all in handleArtifacts.
 * 
 * Problem of using forEach:
 * async handleArtifacts(files, sutId, testId) 
 *      files.forEach(async (file) => {
 *          await this._handleArtifact(file, sutId, testId)
 *      })
 * }
 * this._handleArtifact(file, sutId, testId)  is in the callback of forEach, 
 * what forEach syncs is only the execution flow of the whole scope of the callback, 
 * the async-await part will always be moved to callback Stack, 
 * which means it won't wait for handleArtifact(file1)'s completion to start with handleArtifact(file2). 
 * Also the whole handleArtifacts(files) will not have to wait for all this._handleArtifact(file) to resolve before resolving itself. 
 * That's why s3 can't get enought time to upload files, 
 * instead, get a UnhandledPromiseRejectionWarning: s3.putFile can't find the file to be upload in tempDir/ because it's already deleted.
 * 
 * Solution:
 * async handleArtifacts(files: Array<{ name: string, path: string }>, sutId: string, testId: string) {
 *     await Promise.all(files.map(file => this._handleArtifact(file, sutId, testId)))
 * }
 */