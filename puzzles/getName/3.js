getName = function () {
    console.log('global getName')
}

this.getName = function () {
    console.log('global this\'s getName')
}

function Foo() {
    getName = function () { console.log(1) }
    return this
}

getName()
this.getName()

Foo()
getName()
this.getName()

/**
 * Once: var getName = function() {2}, Foo().getName is no longer a function.
 * 
 * 没有var getName = function() {2}就行，
 * 一有这个，不管写在哪，都会被hoisted。
 *  
 * 
 */