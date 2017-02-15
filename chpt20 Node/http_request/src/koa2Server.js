'use strict'

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

app.use(function (ctx) {
    console.log('==>ctx:');
    console.log(ctx);
    console.log(`==>ctx.request`);
    console.log(ctx.request);
    console.log(`==>ctx.request.body`);
    console.log(ctx.request.body);
    console.log(`==>ctx.request.body.Body`);
    console.log(ctx.request.body.Body);

    const body = ctx.request.body.Body
    ctx.type = 'text/plain'
    ctx.body = `You sent: ${body}`
})

// Tell our app to listen on port 3000
app.listen(3000, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 3000')
})
