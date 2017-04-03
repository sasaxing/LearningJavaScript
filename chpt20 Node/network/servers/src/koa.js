const koa = require('koa');
const multer = require('koa-multer');
const route = require('koa-route');

const app = koa();
const upload = multer({dest: 'uploads/'});

app.use(route.post('/', upload.single('logfiles')));

app.listen(3000);
