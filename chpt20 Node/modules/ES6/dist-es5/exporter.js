'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function cube(x) {
    return x * x * x;
}
var foo = Math.PI + Math.SQRT2;
var graph = {
    options: {
        color: 'white',
        thickness: '2px'
    },
    draw: function draw() {
        console.log('From graph draw function');
    }
};
exports.cube = cube;
exports.foo = foo;
exports.graph = graph;