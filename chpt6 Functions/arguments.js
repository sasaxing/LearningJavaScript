// Head First JavaScript

console.log('\n==> 1. ');
function makeTea(cups, tea) {
  inside = 2;  // without declaring it, it will be created globally. (diff from var)
  console.log("Brewing " + cups + " cups of " + tea);
}

makeTea(3, 'black tea'); //Brewing 3 cups of black tea
makeTea(3); //Brewing 3 cups of undefined
makeTea(3, 'black', 'tea'); //Brewing 3 cups of black
makeTea();//Brewing undefined cups of undefined

console.log(inside); //2

//http://www.zsoltnagy.eu/lesson-3-default-arguments-solutions/

console.log('\n==> Exercise1. ');

function executeCallback(callback, delay = 1000) {
  setTimeout(callback, delay);
}
executeCallback(() => console.log('done'));

console.log('\n==> Exercise2. ');

let lineNumber = 1;

function printComment(comment, line = lineNumber++) {
  console.log(line, comment);
}

printComment('first line...')
printComment('second line...')

console.log('\n==> Exercise3. ');

function argList(productName, price = 100) {
  console.log(arguments.length); //1, arguments means the arguments you passed by calling
  console.log(arguments)  // { '0': 'Krill Oil Capsules' }

  console.log(productName) // Krill Oil Capsules
  console.log(price) //100

  console.log(arguments[0]); //Krill Oil Capsules
  console.log(arguments[1]);  //undefined , NOT 100
};

argList('Krill Oil Capsules');