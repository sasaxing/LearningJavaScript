import * as deepMerge from 'deepmerge'
// recuresively merge 
// get a new object as result
// no modification to the original objects.

const x = {
    foo: { bar: 3 },
    array: [{
        does: 'work',
        too: [1, 2, 3]
    }]
}
const x0_string = JSON.stringify(x)

const y = {
    foo: { baz: 4 },
    quux: 5,
    array: [{
        does: 'work',
        too: [4, 5, 6]
    }, {
        really: 'yes'
    }]
}
const y0_string = JSON.stringify(y)

const expected = {
    foo: {
        bar: 3,
        baz: 4
    },
    array: [{
        does: 'work',
        too: [1, 2, 3, 4, 5, 6]
    }, {
        really: 'yes'
    }],
    quux: 5
}
const expected_string = JSON.stringify(expected)

const result = deepMerge(x, y)
const result_string = JSON.stringify(result)
const x1_string = JSON.stringify(x)
const y1_string = JSON.stringify(y)

console.log(result_string === expected_string)
console.log(x0_string === x1_string)
console.log(y0_string === y1_string)

console.log(result)
console.log(x.array[0])
console.log(y.array[0])