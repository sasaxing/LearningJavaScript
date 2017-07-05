import * as Koa from 'koa'
import * as body from 'koa-body'
import * as path from 'path'
import * as statusCode from 'http-status-codes'

let app = new Koa();

app.use(body({
    multipart: true,
    formidable: {
        uploadDir: path.join(__dirname, '../ServerLogs/tempDir'),
        keepExtensions: true
    }
}))

app.use(async function (context) {
    //console.log(context.request.body.fields)
    //console.log(context.request.body.files) // isArray only it contains more than one files.
    debugger
    console.log('==> body.files.logfiles type: ', Object.prototype.toString.call(context.request.body.files.logfiles))

    try {
        context.throw(507, 'some-customized-error-message') // set res.statusCode=theNumber, res.statusMessage='...'
    } catch (error) {
        console.log('==> error.message: ', error.message)
    }

    //context.response.status = statusCode.INTERNAL_SERVER_ERROR //500
    //context.set('error-message', '==> ERROR.....')
    //context.response.body = context.response
})

app.listen(3000)

/**
 * koa-error-handling : context.throw(res.statusCode, res.statusMessage)
 * 
 * When `context.throw(400, 'some-message')`, it simply set `response.statusCode` and `response.statusMessage` to the specific values.
 * However when `context.throw(500, 'some-message')` or any other code starting with 5, it does not only set `response.statusCode` and `response.statusMessage`, but also throw the error outside.
 * As a result, I’ll have to catch this thrown error with another outer try-catch-block.
 */