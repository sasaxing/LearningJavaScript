"use strict";

const path = require('path')

const Koa = require("koa");   //need koa@2 here !!!!! (koa2 also works for generators, but not couraged.)
let app = new Koa()


app.context.newProperty1 = 'new Property 1 (hidden)'
app.context.newProperty2 = 'new Property 2 (hidden)'

console.log(Object.keys(app))
console.log(Object.keys(app.context))

//x-response-time
app.use(async (ctx, next) => {  //next refers to the next middleware function

    console.log('\n==>x-response-time')

    console.log(Object.keys(ctx))

    console.log(Object.keys(ctx.app))

    console.log(Object.keys(app.context))
    console.log(Object.keys(ctx.app.context))

    console.log(ctx.app.context.newProperty1)
    console.log(ctx.newProperty1)

    const start = new Date()
    await next()  //await logger()
    const ms = new Date() - start

    ctx.set('X-Response-Time', `${ms}ms`) //ctx.response.set(field, value): Set response header field to value
})

//logger
app.use(async function (ctx, next) {
    console.log('\n==>logger')

    const start = new Date()
    await next()  //await response()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`) // Request alias
})

// response
app.use(ctx => {
    console.log('\n==>response')

    ctx.set('error-message', 'Error happens!')
    ctx.response.status = 400
    ctx.response.body = ctx.response  // Response alias (== ctx.response.body)

})

app.on('error', err =>
    console.error('server error', err)
);

app.listen(3000)