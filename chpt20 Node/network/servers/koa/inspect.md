# Koa

### this

Inside `function* () {}`,   `this` includes : _request_, _response_, _app_, _originalUrl_, _req_, _res_, _socket_.

```
{ request: 
   { method: 'GET',
     url: '/',
     header: 
      { host: 'localhost:3000',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8',
        'accept-language': 'en-us',
        'cache-control': 'max-age=0',
        'accept-encoding': 'gzip, deflate' } },
  response: { status: 404, message: 'Not Found', header: {} },
  app: { subdomainOffset: 2, proxy: false, env: 'development' },
  originalUrl: '/',
  req: '<original node req>',
  res: '<original node res>',
  socket: '<original node socket>' }

```

After you change the content of the **response body** by

`this.body = 'Here is what server wrote on this.body'`,  or

`this.response.body = 'Here is what server wrote on this.body'`,

it will automatically set the _response_ to a valid response.

```
{ request: 
   { method: 'GET',
     url: '/',
     header: 
      { host: 'localhost:3000',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8',
        'accept-language': 'en-us',
        'cache-control': 'max-age=0',
        'accept-encoding': 'gzip, deflate' } },
  response: 
   { status: 200,
     message: 'OK',
     header: 
      { 'content-type': 'text/plain; charset=utf-8',
        'content-length': '38' } },
  app: { subdomainOffset: 2, proxy: false, env: 'development' },
  originalUrl: '/',
  req: '<original node req>',
  res: '<original node res>',
  socket: '<original node socket>' }

```

When you use **koa-better-body**  to parse the **koa application** by `app.use(body(options))` , then `this` will not change, but `this.request` will contain more properties. 

```
==> this.request
{ method: 'POST',
  url: '/',
  header: 
   { host: 'localhost:3000',
     'content-type': 'multipart/form-data; boundary=--------------------------001299126894483450231125',
     'content-length': '583',
     connection: 'close' } }

==> this.request.files
[ File {
    domain: null,
    _events: {},
    _eventsCount: 0,
    _maxListeners: undefined,
    size: 142,
    path: '/Users/xiaoshaxing/JavaScript/LearningJavaScript/chpt20 Node/network/servers/koa/uploadDir/upload_690a5ebdb83e77cbf86c91e15726f41b.json',
    name: 'file.json',
    type: 'application/json',
    hash: null,
    lastModifiedDate: 2017-04-03T13:26:43.560Z,
    _writeStream: 
     WriteStream {
       _writableState: [Object],
       writable: false,
       domain: null,
       _events: {},
       _eventsCount: 0,
       _maxListeners: undefined,
       path: '/Users/xiaoshaxing/JavaScript/LearningJavaScript/chpt20 Node/network/servers/koa/uploadDir/upload_690a5ebdb83e77cbf86c91e15726f41b.json',
       fd: null,
       flags: 'w',
       mode: 438,
       start: undefined,
       autoClose: true,
       pos: undefined,
       bytesWritten: 142,
       closed: true } } ]
       
==> this.request.fields
{ sutid: 'sut1',
  my_fieeld: 'my_value',
  logfiles: 
   [ File {
       domain: null,
       _events: {},
       _eventsCount: 0,
       _maxListeners: undefined,
       size: 142,
       path: '/Users/xiaoshaxing/JavaScript/LearningJavaScript/chpt20 Node/network/servers/koa/uploadDir/upload_54f3316582e502ed07f21a3fd3fb6e80.json',
       name: 'file.json',
       type: 'application/json',
       hash: null,
       lastModifiedDate: 2017-04-03T13:30:28.852Z,
       _writeStream: [Object] } ] }
```

