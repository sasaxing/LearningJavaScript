const _ = require('lodash')

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true },
  { 'user': 'ass',  'active': false },
  { 'user': 'ssa',    'active': false }
];

//copy it, and stop until function returns false.
console.log(_.takeWhile(users, function(o) { return !o.active; }))
