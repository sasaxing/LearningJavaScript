let i; // same if `var i;` or writting `var` in for(var i=0...)
for (i = 0; i < 5; i++) { // all loops' scope share the global single i
    /*
    ==> 1st loop:
        let i=0, i=0<5:execute{}
    ==> 2nd loop:
        i++ -> 1; i=1; i=1<5:execute{}
    ==> 3rd loop:
        i++ -> 2; i=2; i=2<5:execute{}
    ==> 4th loop:
        i++ -> 3; i=3; i=3<5:execute{}
    ==> 5th loop:
        i++ -> 4; i=4; i=4<5:execute{}
    ==> 6th loop:
        i++ -> 5; i=5; i=5!<5:End the loop!
    */
    setTimeout(() => {
        console.log(i)
    }, (5 - i) * 1000)    // 5 5 5 5 5
}


for (let i = 0; i < 5; i++) { //each loop's scope has its own i.
    /*
     *
     *  ==> 1st loop:
     *      let i=0, i=0<5:execute{}
     *  ==> 2nd loop:
     *      i++ -> 1; let i=1; i=1<5:execute{}
     *  ==> 3rd loop:
     *      i++ -> 2; let i=2; i=2<5:execute{}
     *  ==> 4th loop:
     *      i++ -> 3; let i=3; i=3<5:execute{}
     *   ==> 5th loop:
     *      i++ -> 4; let i=4; i=4<5:execute{}
     *   ==> 6th loop:
     *      i++ -> 5; let i=5; i=5!<5:End the loop!
     */
    setTimeout(() => {
        console.log(i)
    }, (5 - i) * 1000)    // 4 3 2 1 0
}

// const a is defined inside for{}
// so each loop has its own a,
// when we assign different i to a,
// it's not changing any const variable,
// it's assigning value to a new, independent a constant.


