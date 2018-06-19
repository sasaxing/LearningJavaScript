"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const micro_signals_1 = require("micro-signals");
const signal = new micro_signals_1.Signal();
const asyncListener = (payload) => {
    console.log('Async listener starts... ');
    setTimeout(() => {
        console.log('Async - ', payload);
    }, 3000);
    console.log('Async listener ends... ');
};
signal.add(asyncListener);
const syncListener = (payload) => {
    console.log('sync listener starts... ');
    console.log('sync - ', payload);
    console.log('sync listener ends... ');
};
signal.add(syncListener);
signal.dispatch('a');
//# sourceMappingURL=Sync-Async-Listener.js.map