fs.readFile('./check.json', (err, data)=>{
	if(data){
		console.log(data)
		console.log('hi')
	}
})