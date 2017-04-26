const fs = require('fs');
const path = require('path');

try {
    fs.rename(path.join(__dirname, 'hello.txt'), path.join(__dirname, 'hello_new.txt'))
} catch (err) {
    console.log('err');
}
