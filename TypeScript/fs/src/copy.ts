import * as fs from 'fs';
fs.createReadStream('hello.txt').pipe(fs.createWriteStream('hello-cooy.txt'));
