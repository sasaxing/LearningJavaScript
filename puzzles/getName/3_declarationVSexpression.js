getName()//2 [2 is hoisted as a function declaration]
var getName = function () { console.log('1') }  // A: function expression
getName()//1  [after function expression, getName gets a new value(which is another function)]
function getName() { console.log('2') } //B: function declaration
getName()//1

/**
 * JavaScript 解释器中存在一种变量声明被提升的机制，也就是说函数声明会被提升到作用域的*最最最最*前面，即使写代码的时候是写在最后面，也还是会被提升至最前面。
 * 而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用
 * 
 * function myFunc() {} // function declaration  
 * function(){}  //anonymous function
 * let myFunc = function(){} // function expression
 */

/**
 * var a = 3 // a的声明被hoisted，但是 = 3 没有。 这是因为a = 3这部分是expression。
 * 函数之所以能连着值一起被hoisted，是因为它的declaration就要直接赋值。【JS5的恶心之处】
 */