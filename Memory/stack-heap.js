// https://glebbahmutov.com/blog/javascript-stack-size/#targetText=Variables%20in%20JavaScript%20(and%20most,two%20places%3A%20stack%20and%20heap.&targetText=When%20a%20function%20finishes%20execution,allocated%20by%20all%20local%20variables.

// Only primitive types passed by value (Number, Boolean, references to objecs) are stored on the stack.
// Everything else is allocated dynamically from the shared pool of memory called heap.
// IST: including strings.
var counter1 = 0;
try {
  function foo() {
    counter1 += 1;
    foo();
  }
  foo();
} catch (e) {
  console.error(e);
  console.log("When each call frame has no local var,  #frames =", counter1);
}
// output
// [RangeError: Maximum call stack size exceeded]
// counter = 15665

var counter2 = 0;
try {
  function foo() {
    var local = 1; // frame size will increase
    counter2 += 1;
    foo();
  }
  foo();
} catch (e) {
  console.error(e);
  console.log(
    "When each frame has one more local NUMBER variable #frames =",
    counter2
  );
}
// output
// [RangeError: Maximum call stack size exceeded]
// counter = 13924

const spaceForLocalNumbers = counter2 * 8; // 8 is #bypes a number takes
const numberOfFewerFrames = counter1 - counter2;
const sizePerStackFrameForFunctionOnly =
  spaceForLocalNumbers / numberOfFewerFrames;
console.log("==> sizePerStackFrame(bytes): ", sizePerStackFrameForFunctionOnly);
const stackSizeBytes = sizePerStackFrameForFunctionOnly * counter1;
console.log("==> Size of Stack(MB): ", stackSizeBytes / 1024 / 1024);

var counter3 = 0;
try {
  function foo() {
    var local1 = 1;
    var local2 = {
      foo: "foo"
    }; // only the reference will be stored in the stack.
    counter3 += 1;
    foo();
  }
  foo();
} catch (e) {
  console.error(e);
  console.log(
    "When each frame has two more local NUMBER variable #frames =",
    counter3
  );
}
// output
// [RangeError: Maximum call stack size exceeded]
// counter = 12532

const sizeOfEachLocal2Bytes =
  stackSizeBytes / counter3 - stackSizeBytes / counter2;
console.log({ sizeOfEachLocal2: sizeOfEachLocal2Bytes + " bytes" }); // 8

// Conclusion:
// All data that are stored in Stack occupies the same size, i.e., 8 bytes
// even if it's as small as 1, or as huge as 1.7976931348623157e+308 (Number.MAX_VALUE)
// even if it's a simple char 'a', or it's a big string 'sdfasdfawefasdfasefasdfasdf'
// that's why it can accept dynamic type change.
