import * as Koa from 'koa'
import * as body from 'koa-body'
import * as path from 'path'

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
    //console.log(context.request.body.files)

    context.set('error-message', '==> ERROR.....')
    context.response.body = context.response
})

app.listen(3000)
