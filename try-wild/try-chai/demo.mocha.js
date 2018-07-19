describe('mocha.done', ()=>{
    it('should not end the test', (done)=>{
        done();
        console.log('hello!! I am still executed:)');
    })

    it('should not make the test hold on', (done)=>{
        let outsideFunction;
        const p = new Promise((rs) => {
            outsideFunction = rs;
        })
        setTimeout(() => {
            outsideFunction();
            done();
        }, 1000);
    })
})