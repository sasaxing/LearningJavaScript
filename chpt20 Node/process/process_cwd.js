// you can execute this one in some parent directory and then $node path/to/this/process_cwd.js
console.log(`Current directory: ${process.cwd()}`);
process.chdir(__dirname);
console.log(`New current directory: ${process.cwd()}`);
