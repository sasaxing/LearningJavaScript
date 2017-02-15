var koa = require('koa');
var app = koa();
var fs = require('fs');
/*
app.use(function *(next){
  console.log(this);  // log: request obj
  yield next
});

app.use(function *(){
    this.body =  this.response.status + this.response.message;
})
*/

app.use(function* (){
    if(this.request.method === 'GET'){
        fs.mkdirSync('./aFolder')
    }
})


app.listen(3000);
