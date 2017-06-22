// index.js
var path = require('path');
global.appRoot = path.resolve(__dirname);

// lib/moduleA/component1.js
require(appRoot + '/lib/moduleB/component2.js');