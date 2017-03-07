//$ npm run exe example.js

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}


async function add(x) {
    var a = await resolveAfter2Seconds(20);
    var b = await resolveAfter2Seconds(30);
    //return x + a + b;
    return new Promise((resolve, reject)=> {
        if(x+a+b===60){
            console.log('==> I will resolve.');
            return resolve(x+a+b)
        }
        console.log('==> I will reject.');//still be executed.
        return reject()
    })
}

add(10).then(v => {
    console.log(`result = ${v}`);
}).catch(()=>{
    console.log('it rejected.');
})
