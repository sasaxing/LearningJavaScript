//  firstly export AAA='aaa' in command line.
//console.log(process.env);
console.log(process.env.AAA); //aaa

const debug = process.env.DEBUG === "1" ? console.log : function() {}

debug("Visible only if environment variable DEBUG is set!");
