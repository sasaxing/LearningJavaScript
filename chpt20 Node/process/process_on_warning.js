process.on('warning', (warning) => {
    console.warn(warning.name);
    console.warn(warning.message);
    //console.warn(warning.code);
    //console.warn(warning.stack);
});

// Emit a warning using an Error object.
const myWarning = new Error('Something happened!');
// Use the Error name property to specify the type name
myWarning.name = 'CustomWarning';
myWarning.code = 'WARN001';

process.emitWarning(myWarning);
