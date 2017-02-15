console.log('\n1.');
const d0 = new Date(Date.UTC(2016, 4, 27)); //serverside needs explicit timezone:UTC
console.log(d0);

console.log('\n2. moment-timezone:');
const moment = require('moment-timezone');
// passing an array to Moment.js uses the same parameters as JavaScript's Date // constructor, including zero-based moths (0=Jan, 1=Feb, etc.). toDate()
// converts back to a JavaScript Date object.
const d = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();
console.log(d);

console.log('\n3. format');
const d1 = new Date(Date.UTC(1930,4,10));
console.log(`d1.toLocaleDateString() = ${d1.toLocaleDateString()}`);
console.log(`d1.toLocaleTimeString() = ${d1.toLocaleTimeString()}`);
console.log(`d1.toUTCString() = ${d1.toUTCString()}`);

let fmt = moment(d1).format("YYYY-MM-DD");
console.log(fmt);
fmt = moment(d1).format("YYYY/MM/DD HH:mm [UTC]Z");
console.log(fmt);


console.log('\n4. date arithmetic');
console.log("==> show current time using ${new Date()}:");
console.log(`new Date() = ${new Date()}`);
//log(new Date()) and log(`${new Date()}`) show differently but actually the same.
// I prefer log(${new Date()}) !!

console.log("==> m = moment():");
let m = moment();
console.log(`m = ${m}`);  // exact right now

console.log("==> m.add(3,'days'):");
m.add(3,'days');
console.log(`m = ${m}`);

console.log("==> m.subtract(2,'years'):");
m.subtract(2,'years');
console.log(`m = ${m}`);

console.log("==> reset m again:");
m = moment();
console.log(`m = ${m}`);
console.log("==> set m to the start of current year:");
m.startOf('year');
console.log(`m = ${m}`);
console.log("==> set m to the end of current month:");
m.endOf('month');
console.log(`m = ${m}`);
console.log("==> chain method:");
m = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month');
console.log(`m = ${m}`);

console.log('\n5. fromNow():');
console.log("==> moment().subtract(10, 'seconds').fromNow()");
console.log(moment().subtract(10, 'seconds').fromNow()); // a few seconds ago
