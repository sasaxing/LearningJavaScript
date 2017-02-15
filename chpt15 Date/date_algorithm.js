console.log('\n1. sort');

const dates = [];
// create some random dates
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;

for(let i=0; i<10; i++)
  dates.push(new Date(min + delta*Math.random())); // dates are random and (probably) jumbled

// we can sort them (descending):
dates.sort((a, b) => b - a);
console.log(dates);
// or ascending:
dates.sort((a, b) => a - b);
console.log(dates);
