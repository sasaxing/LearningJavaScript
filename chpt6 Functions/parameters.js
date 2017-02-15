// Head First JavaScript

console.log('\n1. ');
function makeTea(cups, tea){
  inside = 2;  // without declaring it, it will be created globally.
  console.log("Brewing " + cups + " cups of " + tea);
}

makeTea(3, 'black tea'); //Brewing 3 cups of black tea
makeTea(3); //Brewing 3 cups of undefined
makeTea(3, 'black', 'tea'); //Brewing 3 cups of black
makeTea();//Brewing undefined cups of undefined

console.log(inside);
