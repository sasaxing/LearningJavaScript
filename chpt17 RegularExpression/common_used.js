let sentence = 'As I was going to Saint Ives'

//1. test if a pattern happens in a sentence

//if any words in the sentence has >=3 letters
let res = /\w{3,}/ig.test(sentence); //true
console.log(res);

//get all words in the sentence that has >=3 letters
res = sentence.match(/\w{3,}/ig); // ['was', 'going', 'Saint', 'Ives']console.log(res);
console.log(res);


let str = "funny"

//1. test if a pattern happens in a string

//if this string contains letter 'u'
res = /u/.test(str) //true
console.log(res);

//if this string ends up with 'y'
res = /y$/.test(str); //true
console.log(res);

//if this string starts with 'f'
res = /^f/.test(str) //true
console.log(res);

//if this string contains any number
res = /[0-9]+/.test(str) //false
console.log(res);

