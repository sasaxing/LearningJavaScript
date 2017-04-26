const wait = require('wait.for')
const fs = require('fs')
let a = 1
function test() {
	fs.mkdir('tf-waitCallback', function (err) {
		a = 100
		console.log('[test] inside callback: a = ', a)
	})

	console.log('[test] outside callback: a = ', a)
}

test()

function testFiber() {
	let ret = wait.for(fs.readdir, '../ts-waitCallback-wait') //ret=function's param
	console.log('ret:', ret)
	console.log('[testFiber]: after callback: a = ', a)
}

wait.launchFiber(testFiber)
