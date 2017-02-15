//different when running in node interactively and script.

function fn(){
  function f1(){
    function f2(){
      var a2 = 2;
      console.log(this);
    }
    f2();
    var a1=1;
  }
  f1();
  var a0 = 0;
}

fn();
var a=3
console.log(this.a);
