const features = new Map([
    ['f1', true],
    ['f2', true],
    ['f3', false],
    ['f4', true],
]);
features.set('f5', false)
console.log(`features.size = ${features.size}`); //5
console.log(features)

const trueFeatures = []
features.forEach((value, key) => {
    if (value) {
        trueFeatures.push(key)
    }
})

console.log(trueFeatures)