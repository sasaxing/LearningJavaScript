/**
 * Object.assign(target, ...sources)
 * 
 * The Object.assign() method only copies enumerable and own properties from a source object to a target object. 
 * It uses [[Get]] on the source and [[Set]] on the target, 
 * so it will invoke getters and setters.
 * 
 * Briefly, Object.assign can copy all values from source(II) to target(I), 
 * If target has already the same item(same key, but maybe different value), then use the value of source. 
 */

const source = { src: 'src', a: 'aOfSource', b: 'BBB' }
const target = { tar: 'tar', a: 'aOfTarget', b: 'BBB' }

const result = Object.assign(target, source)
console.log(result)
console.log(target)
console.log(result === target) //true
