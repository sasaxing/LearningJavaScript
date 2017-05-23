import * as fsPromised from 'fs.promised'
fsPromised.link('hello.txt', 'newFolder/hello.txt.copy')