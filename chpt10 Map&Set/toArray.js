const features = new Map([
    ['f1', true],
    ['f2', true],
    ['f3', false],
    ['f4', true],
]);

const trueFeaturesArray = Array.from(features.keys()).filter(feature => features.get(feature))
console.log(trueFeaturesArray)