function doSomething(x: number | string) {
    if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
        //console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
        console.log(x.substr(1)); // OK
    }
    //x.substr(1); // Error: There is no guarantee that `x` is a `string`
}