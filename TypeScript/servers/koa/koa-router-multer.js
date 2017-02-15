const Koa = require('koa');
const route = require('koa-route');
const multer = require('koa-multer');

const app = new Koa();
const upload = multer({ dest: 'uploads/' });

app.use(route.post('/profile', upload.single('avatar')));
app.use(route.get('/profile', function(req, res){
    res.send('hello');
})
)

app.listen(3000);
