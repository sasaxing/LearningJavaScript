const fs = require('fs');
const rs = fs.createReadStream('stream.txt');
const ws = fs.createWriteStream('stream_copy.txt');
rs.pipe(ws); //you could take the data coming out of a read stream and immediately write it to a write stream
// Piping is a common technique for moving data.
// For example, you could pipe the contents of a file to a webserver’s response.
// Or you could pipe compressed data into a decompression engine, which would in turn pipe data out to a file writer.
