const deepmerge = require('deepmerge');

const defaultPerson = {
    name: 'Anon',
    gender: 'Female',
    hair: {
        color: 'brown',
        cut: 'long'
    },
    eyes: 'blue',
    family: ['mom', 'dad']
};

const me = {
    name: 'David Walsh',
    gender: 'Male',
    hair: {
        cut: 'short'
    },
    family: ['wife', 'kids', 'dog']
};

const merged1 = { ...defaultPerson, ...me }; // won't change the value of defaultPerson.
const merged2 = Object.assign({}, defaultPerson, me);
console.log(JSON.stringify(merged1) === JSON.stringify(merged2)); // TRUE, but not without stringify

function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
}
function isObject(obj) {
    return typeof obj === 'object' && obj !== null && obj.length === undefined;
}

const merged3 = mergeDeep(defaultPerson, me);
console.log(merged3);


