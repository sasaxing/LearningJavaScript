define(function () {
    const myLogger = {}
    myLogger.log = console.log;
    myLogger.log('hi!!!');
    return myLogger;
})