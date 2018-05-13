var revealingModule = (function () {
    this.privateVar = "Ben Thomas";
    function setNameFn(strName) {
        this.privateVar = strName;
    }
    return {
        privateVar: this.privateVar,
        setName: setNameFn,
    };
})();

//revealingModule = {setName: setNameFn}

revealingModule.setName("Paul Adams");
console.log(revealingModule.privateVar); // Paul Adams