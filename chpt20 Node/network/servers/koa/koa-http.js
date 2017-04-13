const http = require('http');
const Koa = require('koa');
const app = new Koa();
let server = http.createServer(app.callback())
// response
app.use(async ctx => {
    console.log('\n==>response')
    try {
        await aProm('bad')
        ctx.response.status = 200
        debugger
    } catch (e) {
        debugger
        ctx.response.status = 400
        ctx.set('error-message', 'Error happens! hahaahahahahha')
    } finally {
        ctx.response.body = ctx.response  // Response alias (== ctx.response.body)
    }
})
server.listen(3000);
function closeServer() {
    //it will not cause an error to throw if there is nothing to close.
    // the cb function of server.close will be executed no mater what.
    server.close(function () {
        console.log('Server is closed.')
    })
}
setTimeout(closeServer, 5000)