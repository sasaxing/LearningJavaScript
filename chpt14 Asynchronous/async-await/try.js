//$ npm run exe try.js
let fs = require('fs')
let path = require('path')

function createFolder(sutid){
    return new Promise(function(resolve, reject) {
        fs.mkdir(path.join(__dirname,sutid), function(err){
            if(err){
                reject(err)
            } else {
                resolve()
            }
        })
    });
}

async function archive(sutid, fileName, oldPath) {
    await createFolder(sutid)
    let targetPath = path.join(__dirname, sutid, fileName)
    
    return new Promise((resolve, reject)=>{
        fs.rename(oldPath, targetPath, (err)=>{
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })})
        // error happens here can not be catched by catch{}, it will caught inside cb instead
        
    }
    
    archive('sut1', 'hello.txt', path.join(__dirname, 'hello.txt'))
    .then(v => {
        console.log(v);
    },
    r=> {
        console.log(r);
    }
)
