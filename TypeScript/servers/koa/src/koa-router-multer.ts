import * as koa from 'koa'
//import multer from 'koa-router-multer'
import * as route from 'koa-route'
import * as multer from 'koa-multer'

let app = new koa();
let upload = multer({dest: 'uploads/'})

app.use(route.post('/', upload.single('avatar')));
app.listen(3000);
