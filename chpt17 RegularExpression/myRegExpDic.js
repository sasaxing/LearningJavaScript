// /.*/ . is any char, * means repeated zero or more times.
// this toSearch can find all things that look like this:
// import {______} from '_________BYOTConfig'
let toSearch = " import { TransportConfig } from '../../src/BYOTConfig' "
let regExp = /import \{.*\ } from '.*BYOTConfig'/
console.log(regExp.test(toSearch)) // true