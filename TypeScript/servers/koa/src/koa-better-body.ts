import * as Koa from 'koa'
import * as body from 'koa-better-body'
//import * as fs from 'fs'
import * as path from 'path'
import * as koaConvert from 'koa-convert'

let app = new Koa();

async function waitXSec(x: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, x * 1000)
    })
}
app.use(koaConvert(body({
    encoding: 'utf-8',
    uploadDir: path.join(__dirname, '../ServerLogs/tempDir'),
    keepExtensions: true
})))
app.use(async function (context) {
    console.log(context.request.body);
    //console.log(context.request.files);
    //console.log(context.request.fields);
    /*
    context.request.files.forEach(function (element) {
        let newPath = '../ServerLogs/targetDir/' + element.name;
        
        fs.rename(element.path, newPath, function (err) {
            if (err) {
                throw err;
            } else {
                if (fs.statSync(newPath).size === 0) {
                    console.log("There is a file in ServerLogs/ is empty!")
                } else {
                    console.log("successfully moved logfiles into ServerLogs/");

                }
            }
        })
    })
    */

    console.log(context.response);  // 404,...
    await waitXSec(5)
    context.body = context.response // Interesting magic
    console.log(context.response);   //200,......
    await waitXSec(5)
    console.log('Server\'s code comes to end, response is sent.')
});
app.listen(3000);
