const syncFunction = ()=>{
    console.log('This is sync.');
}

const asyncFunction = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('This is async.');
            resolve();
        }, 3000);
    })
}

const functionWrapper = async (f) => {
    await f();
}

functionWrapper(asyncFunction);
functionWrapper(syncFunction);
