const exec = require('child_process').exec;
exec('ls', function(err, stdout, stderr) {
  // p1-a command, p2-the response function(p:the executing result of the p1 command)
  if(err) return console.error('Error executing this command!');
  stdout = stdout.toString(); // convert Buffer to string console.log(stdout);
  stderr = stderr.toString();
  if(stderr !== '') {
    console.error('error:');
    console.error(stderr);
  }else{
    console.log(stdout);
  }
});
