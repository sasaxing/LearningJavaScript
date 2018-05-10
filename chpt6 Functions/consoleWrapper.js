'use strict';
let spunkyClient = require('@getgo/spunky-client')

function ConsoleWrapper() {
    this.setTarget = function (console) {
        [['log', 'log'], ['info', 'info'], ['warn', 'warn'], ['error', 'error'], ['debug', 'debug']].forEach(sourceAndTarget => {
            const sourceLevel = sourceAndTarget[0];
            const targetLevel = sourceAndTarget[1];
            ConsoleWrapper.prototype[sourceLevel] = (console[targetLevel] || (() => { })).bind(console);
        });

        return this; // chainable
    };
}

let myLogger = new ConsoleWrapper().setTarget(console);
myLogger.log('Hello!', 'this is an array')

const formatLogger = {
    log: function () {
        console.log('I am the new .log ', printArguments(arguments));
    },
    info: function () {
        console.info('I am the new .info ', printArguments(arguments));
    },
    warn: function () {
        console.warn('I am the new .warn ', printArguments(arguments));
    },
    debug: function () {
        console.debug('I am the new .debug ', printArguments(arguments));
    },
    error: function () {
        console.error('I am the new .error ', printArguments(arguments));
    }
};

function printArguments(args) { return Array.from(args).map(function (elem) { return JSON.stringify(elem); }).join(', '); }

myLogger.setTarget(formatLogger)
myLogger.log(['Hello from StringLogger.', 'This is also an array.'])

spunkyClient.createDelayingLogger("wss://localhost:8443", 1000)
    .then(remoteLogger => {
        myLogger.setTarget(remoteLogger)
        myLogger.log(['Hello from StringLogger.', 'This is also an array.'])
    })
