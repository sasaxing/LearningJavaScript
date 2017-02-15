// word boundary:
// a \w match is either preceded by or followed by a \W character
// or the beginning or end of the string.

const inputs = [ "john@doe.com",
        "john@doe.com is my email",
        "my email is john@doe.com",
        "use john@doe.com, my email",
        "my email:john@doe.com.",
];

const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
o = inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
console.log(o);

/*
//log:
[ '<a href="mailto:john@doe.com">john@doe.com</a>',
  '<a href="mailto:john@doe.com">john@doe.com</a> is my email',
  'my email is <a href="mailto:john@doe.com">john@doe.com</a>',
  'use <a href="mailto:john@doe.com">john@doe.com</a>, my email',
  'my email:<a href="mailto:john@doe.com">john@doe.com</a>.' ]
*/


const aStr = " countdown discount recount accountable count recount ";
console.log('\no1 = ');
o1 = aStr.match(/count/g); //6 times
console.log(o1);

console.log('\no2 = ');
o2 = aStr.match(/\bcount/g); //2 times: begin with count(there must be a non-word before count)
console.log(o2);

console.log('\no3 = ');
o3 = aStr.match(/count\b/g); //4 times: end with count(there must be a non-word after count)
console.log(o3);

console.log('\no4 = ');
o4 = aStr.match(/count\B/g); //3 times: contain count,but  Not end with count, may or may not start with count (there must be a word after count)
console.log(o4);

console.log('\no5 = ');
o5 = aStr.match(/\Bcount\B/g); //1 time: contain count,but  Not end with count, not start with count(there must be a word before and after count)
console.log(o5);
