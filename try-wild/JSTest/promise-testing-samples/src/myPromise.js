module.exports.resolveIt = function() {
	return new Promise(function(resolve, reject) {
        resolve('foo')
	});
};

module.exports.resolveAnObject = function() {
    myObj = {name: 'xxs', gender: 'female'}
    return new Promise(function(resolve, reject) {
        resolve(myObj)
    });
}

module.exports.rejectIt = function() {
	return new Promise(function(resolve, reject) {
        reject('foo')
	});
};
