const koa = require("koa");
const app = new koa()

app.use(function* (){
    this.body = "hello xiaosha"
})

app.listen(8000);

module.exports = app
