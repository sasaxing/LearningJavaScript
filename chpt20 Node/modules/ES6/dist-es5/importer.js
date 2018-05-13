'use strict';

var _exporter = require('./exporter.js');

_exporter.graph.options = {
    color: 'blue',
    thickness: '3px'
};
_exporter.graph.draw();
console.log((0, _exporter.cube)(3)); // 27
console.log(_exporter.foo); // 4.555806215962888