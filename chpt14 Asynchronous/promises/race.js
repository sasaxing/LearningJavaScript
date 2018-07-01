const timeout1 = () => {
    return new Promise((rs) =>{
        setTimeout(() => {
            console.log('1');
            rs();
        }, 2000);
    })
}

const timeout2 = () => {
    return new Promise((rs) =>{
        setTimeout(() => {
            console.log('2');
            rs();
        }, 3000);
    })
}

Promise.race([timeout1(), timeout2()])