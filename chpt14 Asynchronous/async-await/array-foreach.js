//$ npm run exe array-foreach.js
const words = ["Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November"];

const myObj = {
    name: 'xxs'
}
let i = 100
let j = 200

async function returnAPromise(item) {
    return 'I am a resolved value'
    /*
    return new Promise((resolve, reject) => {
        resolve(item)
    }).then(() => {
        console.log(item)
    })
    */
}


words.forEach(async function (element, index, arr) {
    console.log('begin: ', i++)

    //this part will be executed in the end
    let res = await returnAPromise(element)
    console.log(res)

    console.log('end:   ', j++)
}, myObj)

/**
 * [await's effect]
 * 
 * when compiler meets 'await', it moves all job after that but in the same scope
 * from CallStack -> Callback Queue.
 * Then wait until all the other stuff finish, then move those back to Call stack.
 * And execute the one to be await first. After await finishes, the following steps are executed in the normal order.
 * 
 * So 'await' makes sure that 
 * all following steps(within the same scope) after the one to be awaited 
 * will happen after the one to be awaited.
 * 
 * forEach:
 * e2 is not within the same scope with e1.
 */


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
 *      await Promise.all(files.map(file => this._handleArtifact(file, sutId, testId)))
 * }
 */